import React from "react";
import CommonBanner from "../components/CommonBanner/CommonBanner";
import LeadingManagement from "../components/LeadingManagement/LeadingManagement";
import Team from "../components/Team/Team";

const AboutPage = () => {
  return (
    <div>
      <CommonBanner title='About us' />
      <LeadingManagement />
      <Team />
    </div>
  );
};

export default AboutPage;
