import React from "react";
import Image from "next/image";
import MissionThumb from "@/app/assets/images/mission-thumb.png";
import VissionThumb from "@/app/assets/images/vission-thumb.png";
export default function MissionVission() {
  return (
    <>
      <section>
        <div className='container 2xl:max-w-[1180px] lg:pb-[120px] pb-[80px] '>
          <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-[60px] gap-[30px] lg:items-center mb-[40px]'>
            <div>
              <Image className='' src={MissionThumb} alt='mission thumb' />
            </div>
            <div>
              <h4 className='subtitle mb-[5px]'>About Helion Edge</h4>
              <h2 className='section-title mb-[15px]'>Our Mission</h2>
              <p>
                At Helion Edge, we aim to revolutionize asset management by
                integrating cutting-edge technology with robust regulatory
                frameworks, providing institutional investors with unmatched
                transparency, security, and performance.
              </p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-[60px] gap-[30px] lg:items-center'>
            <div className='md:order-2'>
              <Image className='' src={VissionThumb} alt='mission thumb' />
            </div>
            <div className='md:order-1'>
              <h4 className='subtitle mb-[5px]'>About Helion Edge</h4>
              <h2 className='section-title mb-[15px]'>Our Vission</h2>
              <p>
                To be the leading non-custodial asset management platform,
                trusted globally by institutional investors for our innovation
                and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
