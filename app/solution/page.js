import React from "react";
import CommonBanner from "../components/CommonBanner/CommonBanner";
import YieldAutomation from "../components/YieldAutomation/YieldAutomation";
import FuturePlans from "../components/FuturePlans/FuturePlans";
import OurVision from "../components/OurVision/OurVision";
import Generation from "../components/Generation/Generation";
import InnovativeStrategies from "../components/InnovativeStrategies/InnovativeStrategies";

const SolutionPage = () => {
  return (
    <div>
      <CommonBanner title='solution' />
      <YieldAutomation />
      <InnovativeStrategies />
      <FuturePlans />
      <Generation />
      <OurVision />
    </div>
  );
};

export default SolutionPage;
