import React from "react";
import photo from "./photo.jpeg";

import { PhotoContainer, Img } from "./Elements";

function MidSection() {
  return (
    <PhotoContainer>
      <Img style={{ backgroundImage: `url(${photo})` }}></Img>
    </PhotoContainer>
  );
}

export default MidSection;
