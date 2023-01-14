import React, { useState, useEffect } from "react";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useParams } from "react-router";

const Resource = ({ resource, completed = false }) => {
  const { user } = useAuthContext();
  const [checked, setChecked] = useState(completed);
  const { id } = useParams();

  const toggleCompleted = async () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const postProgress = () => {
      api.post(
        "progress",
        { resourceId: resource._id, roadmapId: id },
        {
          headers: { Authorization: user.accessToken },
        }
      );
    };
    if (checked) {
      postProgress();
    }
  }, [checked, user, id, resource]);

  return (
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
  );
};

export default Resource;
