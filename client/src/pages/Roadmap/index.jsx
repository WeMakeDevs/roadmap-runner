import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SidebarLayout from "../../components/SidebarLayout";
import Section from "./Section";
import { useAuthContext } from "../../hooks/useAuthContext";
import api from "../../api";
import "./index.css";
import Modal from "../../components/Modal";
import Confetti from "../../components/Confetti";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Roadmap = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [roadmap, setRoadmap] = useState();
  const [loading, setLoading] = useState(false);
  const [enrollLoading, setEnrollLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [showEnrolledSucces, setShowEnrolledSuccess] = useState(false);

  useEffect(() => {
    async function fetchRoadmaps() {
      setLoading(true)
      const res = await api.get(`roadmap/${id}`, {
        headers: { Authorization: user.accessToken },
      });
      setEnrolled(res.data.isAlreadyEnrolled)
      setRoadmap(res.data.roadmap);
      setLoading(false)
    }

    fetchRoadmaps();
  }, [user, id]);

  const handleEnroll = async () => {
    setEnrollLoading(true)
    try {
      await api.post(
        "enroll",
        { id },
        { headers: { Authorization: user.accessToken } }
      );

      setEnrolled(true)
      setShowEnrolledSuccess(true)
      
    } catch (error) {
      console.log(error);
    } finally {
      setEnrollLoading(false)
    }
  };

  if(loading) {
    return <SidebarLayout>
      <Loader/>
    </SidebarLayout>
  }

  return (
    <SidebarLayout>
      <div className="roadmap-container">
        <div>
          <h1>{roadmap?.name}</h1>
          {!enrolled && !enrollLoading && (
            <button onClick={handleEnroll} className="roadmap-enroll-btn">
              Enroll
            </button>
          )}
          {!enrolled && enrollLoading && (
            <button
              onClick={handleEnroll}
              className="roadmap-enroll-btn"
              disabled
            >
              Enroll
            </button>
          )}

          {enrolled && (
            <p className="already-enrolled-msg">
              {" "}
              <i className="fa-solid fa-circle-check"></i> Already enrolled
            </p>
          )}

          <div className="roadmap">
            {roadmap &&
              roadmap.sections &&
              roadmap.sections.map((section) => (
                <Section key={section._id} section={section} />
              ))}
          </div>
        </div>

        <div className="roadmap-info">
          <div>
            <img src={roadmap?.bannerImage} alt="" />
            <h2
              style={{
                color: "white",
                marginBottom: "1rem",
                fontSize: "1.5rem",
              }}
            >
              {roadmap?.name}
            </h2>
            <p className="description">{roadmap?.description}</p>
          </div>
        </div>
      </div>

      {
        showEnrolledSucces && <>
          <Confetti/>
        <Modal closeModal={() => setShowEnrolledSuccess(false)}>
          <h2>Success!</h2>
          <p>You have successfully enrolled into the roadmap!</p>
          <Link to={`/myroadmaps/${id}`}>Start Learning</Link>
        </Modal>
        </>
      }
    </SidebarLayout>
  );
};

export default Roadmap;
