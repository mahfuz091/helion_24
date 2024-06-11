import Image from "next/image";
import React from "react";
import vision from "../../assets/images/vision.png";

const OurVision = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] '>
      <div className='px-[76px] grid grid-cols-1 md:grid-cols-2 gap-[99px]'>
        <div className='yield_vision'>
          <h3>Invest in Our Vision</h3>
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
        <Image src={vision} alt='vision' />
      </div>
    </div>
  );
};

export default OurVision;
