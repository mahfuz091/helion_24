import Image from "next/image";
import React from "react";
import vision from "../../assets/images/vision.png";

const OurVision = () => {
  return (
    <div className='container  py-[40px]  xl:py-[100px]  '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[99px]'>
        <div className='yield_vision self-center'>
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
        <Image className='self-center' src={vision} alt='vision' />
      </div>
    </div>
  );
};

export default OurVision;
