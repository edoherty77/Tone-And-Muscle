import React from "react";
import "react-responsive-modal/styles.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import "../Styles/styles.css";

const Player = ({ name, url, open, onClose, onPause }) => {
  return (
    <div dividers={true} className="player-container">
      <FontAwesomeIcon
        className="closeIcon"
        onClick={onClose}
        icon={faTimesCircle}
        size="2x"
      />
      <ReactPlayer
        playing={true}
        className="react-player"
        controls={true}
        width="100%"
        height="100%"
        url={url}
        onPause={onPause}
      />
    </div>
  );
};

export default Player;
