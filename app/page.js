import React from 'react';
import Banner from "@/app/components/Banner/Banner";
import Features from "@/app/components/Features/Features";
import MissionVission from "@/app/components/MissionVission/MissionVission";
export default function homePage() {
  return (
    <div>
      <Banner/>
      <Features/>
      <MissionVission/>
    </div>
  )
}

