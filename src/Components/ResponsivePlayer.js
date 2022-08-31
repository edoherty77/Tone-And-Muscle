import React from "react";
import ReactPlayer from "react-player";
import "../Styles/styles.css";

const ResponsivePlayer = ({ url }) => {
  return (
    <div className="responsive-player-wrapper">
      <ReactPlayer
        className="responsive-react-player"
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default ResponsivePlayer;
