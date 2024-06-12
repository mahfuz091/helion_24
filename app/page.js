import React from "react";
import Banner from "@/app/components/Banner/Banner";
import HomeContact from "./components/HomeContact/HomeContact";
import Features from "./components/Features/Features";
import MissionVission from "./components/MissionVission/MissionVission";
export default function homePage() {
  return (
    <div>
      <Banner />
      <Features />
      <MissionVission />
      {/* <HomeContact /> */}
    </div>
  );
}
