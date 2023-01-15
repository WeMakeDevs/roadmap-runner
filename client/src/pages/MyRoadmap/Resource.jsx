import React, { useState } from "react";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useParams } from "react-router";
import Modal from "../../components/Modal";
import Confetti from "../../components/Confetti";
import TweetShare from "../../components/TweetShare";

const Resource = ({ resource, completed = false, roadmapName }) => {
  const { user } = useAuthContext();
  const [checked, setChecked] = useState(completed);
  const [showCompletedMsg, setShowCompletedMsg] = useState(false);
  const { id } = useParams();

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

  const toggleCompleted = async () => {
    setChecked(true);
    postProgress();
  };


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
              <TweetShare shareText={`Hey there👋 I completed a new section ${resource.id} ${resource.title} from the ${roadmapName} roadmap! Join my journey! #RoadmapRunner`} />
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
            <TweetShare shareText={`Hey there👋 I completed a new section ${resource.id} ${resource.title} from the ${roadmapName} roadmap! Join my journey!  #RoadmapRunner`} />
          </Modal>
        </>
      )}
    </>
  );
};

export default Resource;
