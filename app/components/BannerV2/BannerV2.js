"use client";
import { useEffect, useState } from "react";
import background_image from "../../assets/images/banner-img.png";
import b_chart from "../../assets/images/B.png";

import "./BannerV2.css";
import Image from "next/image";

const BannerV2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => setShowModal(true);
  useEffect(() => {
    if (showModal) {
      // Set the iframe src to reload the content when the modal opens
      setIframeSrc("https://app.pipefy.com/public/form/cHvjaOoc"); // Replace with your iframe URL
    }
  }, [showModal]);
  return (
    <div className='banner_v2'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-7'>
            <div className='banner_content'>
              <h1>
                The <span>Solution</span> for Automated DeFi Yield Strategies{" "}
                <span className='inline-block'>
                  <Image src={b_chart} alt='' />
                </span>
              </h1>
              <p>Empowering Your DeFi Yield Automation</p>
              <button onClick={handleShowModal} className='thm_btn talk_btn'>
                <a href='#'>Talk to Us</a>
              </button>
            </div>
          </div>
          <div className=' col-span-1 lg:col-span-5'>
            <Image className='banner_image' src={background_image} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerV2;
