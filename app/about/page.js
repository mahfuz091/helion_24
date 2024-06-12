import React from "react";
import CommonBanner from "../components/CommonBanner/CommonBanner";
import LeadingManagement from "../components/LeadingManagement/LeadingManagement";
import Team from "../components/Team/Team";
import Advisory from "../components/Advisory/Advisory";

const AboutPage = () => {
  return (
    <div>
      <CommonBanner title='About us' />
      <LeadingManagement />
      <Team />
      <Advisory />
    </div>
  );
};

export default AboutPage;
