import Image from "next/image";
import React from "react";
import automation from "../../assets/images/automation.png";

const YieldAutomation = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] '>
      <div className='px-[76px] grid grid-cols-1 md:grid-cols-2 gap-[70px]'>
        <Image src={automation} alt='automation' />
        <div className='yield_automation'>
          <h3>Seamless Yield Automation</h3>
          <p>
            At Helion EDGE, we specialize in delivering top-tier automated DeFi
            yield strategies designed to enhance your investment performance.
          </p>
          <p>
            Our automated strategies leverage advanced analytics and real-time
            data to ensure optimal performance across various market conditions.
            By partnering with Helion EDGE, you gain access to meticulously
            crafted strategies that are rigorously tested and continuously
            optimized for maximum profitability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YieldAutomation;
