import React from "react";
import "./index.css";

const ShareTweet = ({
  shareText = "Hello there 👋 I'm following and learning through the roadmaps. Join my journey!",
}) => {
  function shareProgressUrl() {
    return "http://twitter.com/share?text=" + encodeURIComponent(shareText);
  }

  return (
    <a
      className="share-tweet"
      href={shareProgressUrl()}
      target="_blank"
      rel="noreferrer"
    >
      Share your progress
      <i className="fa-brands fa-twitter"></i>
    </a>
  );
};

export default ShareTweet;
