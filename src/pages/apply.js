import React, { useState } from "react";

import Navbar from "../Components/Navbar";

import LandingSection from "../Components/LandingSection";
import ProgressSection from "../Components/ProgressSection";
import PainSection from "../Components/PainSection";
import Sidebar from "../Components/Sidebar";
import TestSection from "../Components/TestSection";
import AboutSection from "../Components/AboutSection";
import BioSection from "../Components/BioSection";
import MidSection from "../Components/MidSection";
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
      <BioSection />
    </>
  );
}

export default Apply;
