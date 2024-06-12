"use client";

import React from "react";
import BannerShapeTop from "@/app/assets/images/cbanner-shappe-top.png";
import BannerShapeBottom from "@/app/assets/images/cbanner-shape-bottom.png";
import Image from "next/image";

const CommonBanner = ({ title }) => {
  return (
    <div className='container 2xl:max-w-[1460px]'>
      <div className='common_banner-area relative z-10 bg-gradient-to-l to-[#E9F7FF] from-[#C5EAFF] py-16 md:py-[109px]'>
        <p className='flex justify-center items-center gap-[6px] text-[18px] text-[#000] font-medium'>
          Home{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
          >
            <path
              d='M6.91846 6.00003C6.91846 6.2151 6.83635 6.43013 6.67246 6.5941L1.51268 11.7538C1.18445 12.0821 0.652288 12.0821 0.324195 11.7538C-0.00389835 11.4257 -0.00389835 10.8937 0.324195 10.5654L4.88986 6.00003L0.324355 1.43461C-0.00373889 1.10638 -0.00373889 0.574382 0.324355 0.246315C0.652448 -0.0820704 1.18461 -0.0820704 1.51284 0.246315L6.67262 5.40596C6.83653 5.57001 6.91846 5.78505 6.91846 6.00003Z'
              fill='#38B6FF'
            />
          </svg>
          <span className='capitalize text-[#38B6FF] text-[18px]'>{title}</span>
        </p>
        <h2 className='main-title capitalize text-center'> {title}</h2>
        <Image
          className='absolute top-0 left-0 -z-10 2xl:max-w-auto xl:max-w-[200px] lg:max-w-[150px] md:max-w-[120px] max-w-[100px]'
          src={BannerShapeTop}
          alt='Banner shape top'
        />
        <Image
          className='absolute bottom-0 right-0 z-10 2xl:max-w-auto xl:max-w-[300px] lg:max-w-[250px] md:max-w-[200px] max-w-[150px]'
          src={BannerShapeBottom}
          alt='Banner shape bottom'
        />
      </div>
    </div>
  );
};

export default CommonBanner;
