import React, { useState } from "react";

import ProgressSection from "../Components/ProgressSection";
import BioSection from "../Components/BioSection";
import FormSection from "../Components/FormSection";

function Apply() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <FormSection />
      <ProgressSection />
      <BioSection />
    </>
  );
}

export default Apply;
