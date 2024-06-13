import Image from "next/image";
import React from "react";
import automation from "../../assets/images/automation.png";

const YieldAutomation = () => {
  return (
    <div className='container  pt-[40px]  xl:pt-[100px] '>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-[30px] md:gap-[70px]'>
        <div className='col-span-1 md:w-[50%] lg:w-full lg:col-span-4'>
          <Image className='' src={automation} alt='automation' />
        </div>
        <div className='yield_automation   lg:col-span-8'>
          <h3 className='text-[25px] xl:text-[35px]  mb-[14px] xl:mb-[18px]'>
            Seamless Yield Automation
          </h3>
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
