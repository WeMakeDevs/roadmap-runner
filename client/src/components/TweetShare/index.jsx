import React from "react";
import "./index.css";

const ShareTweet = ({
  shareText = "Hello there 👋 I'm following and learning through the roadmaps. Join my journey!",
}) => {
  return (
    <a className="share-tweet" href={shareText} target="_blank" rel="noreferrer">
      Share your progress
      <i className="fa-brands fa-twitter"></i>
    </a>
  );
};

export default ShareTweet;
