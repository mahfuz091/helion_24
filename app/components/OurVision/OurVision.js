import Image from "next/image";
import React from "react";
import vision from "../../assets/images/vision.png";

const OurVision = () => {
  return (
    <div className='container  py-[40px]  xl:py-[100px]  '>
      <div className='grid grid-cols-1 md:grid-cols-12 xl:gap-[60px] gap-[30px]'>
        <div className='yield_vision self-center col-span-1 md:col-span-7 xl:col-span-8'>
          <h3 className='text-[25px] xl:text-[40px]  '>Invest in Our Vision</h3>
          <p>
            We are excited to invite you to be part of the future of digital
            asset management. By investing in Helion Edge, you support a
            platform designed to revolutionize the industry with advanced
            technology and innovative strategies.
          </p>
          <button className='thm_btn'>
            <a href=''>Contact Us</a>
          </button>
        </div>
        <div className='col-span-1 md:col-span-5 xl:col-span-4 '>
          <Image className='self-center' src={vision} alt='vision' />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
