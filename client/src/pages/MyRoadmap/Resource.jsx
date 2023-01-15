import React, { useState, useEffect } from "react";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useParams } from "react-router";
import Modal from "../../components/Modal";
import Confetti from "../../components/Confetti";
import { Link } from "react-router-dom";

const Resource = ({ resource, completed = false }) => {
  const { user } = useAuthContext();
  const [checked, setChecked] = useState(completed);
  const [showCompletedMsg, setShowCompletedMsg] = useState(false);
  const { id } = useParams();

  const toggleCompleted = async () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const postProgress = async () => {
      await api.post(
        "progress",
        { resourceId: resource._id, roadmapId: id },
        {
          headers: { Authorization: user.accessToken },
        }
      );
      setShowCompletedMsg(true);
    };
    if (checked) {
      postProgress();
    }
  }, [checked, user, id, resource]);

  if (checked) {
    return (
      <>
        <div className="resource card">
          <div>
            <label className="checkbox-container tooltip">
              <input type="checkbox" className="form-control" checked={true} />
              <span className="checkbox-custom"></span>
            </label>
            {resource.id} {resource.title}
          </div>
          <a href={resource.url} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        {showCompletedMsg && (
          <>
            <Confetti />
            <Modal closeModal={() => setShowCompletedMsg(false)}>
              <h2>Success!</h2>
              <p>You have completed one more section! Share your progress 🤗</p>
              <Link to={`/myroadmaps`}>Share</Link>
            </Modal>
          </>
        )}
      </>
    );
  }

  return (
    <>
    <div
      className="resource card"
      style={{ cursor: "pointer" }}
      onClick={toggleCompleted}
    >
      <div>
        <label className="checkbox-container tooltip">
          <input
            type="checkbox"
            className="form-control"
            checked={checked}
            onChange={toggleCompleted}
          />
          <span className="checkbox-custom"></span>
          {!checked && <span className="tooltiptext">Mark as done</span>}
        </label>
        {resource.id} {resource.title}
      </div>
      <a href={resource.url} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
    {showCompletedMsg && (
        <>
          <Confetti />
          <Modal closeModal={() => setShowCompletedMsg(false)}>
            <h2>Success!</h2>
            <p>You have completed one more section! Share your progress 🤗</p>
            <Link to={`/myroadmaps`}>Share</Link>
          </Modal>
        </>
      )}
    </>
  );
};

export default Resource;
