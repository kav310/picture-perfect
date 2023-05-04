import React from "react";
import HeroSectionComponent from "./HeroSectionComponent";
import TrustedByComponent from "./TrustedByComponent";
import AboutUsComponent from "./AboutUsComponent"

const LandingPage = () => {
  return (
    <>
      <HeroSectionComponent />
      <TrustedByComponent />
      <AboutUsComponent/>
    </>
  );
};

export default LandingPage;
