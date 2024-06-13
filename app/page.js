import React from "react";
import Banner from "@/app/components/Banner/Banner";
import HomeContact from "./components/HomeContact/HomeContact";
import Features from "./components/Features/Features";
import MissionVission from "./components/MissionVission/MissionVission";
import BannerV2 from "./components/BannerV2/BannerV2";
export default function homePage() {
  return (
    <div>
      {/* <Banner /> */}
      <BannerV2 />
      <Features />
      <MissionVission />
      {/* <HomeContact /> */}
    </div>
  );
}
