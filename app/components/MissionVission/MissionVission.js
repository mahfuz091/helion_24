import React from "react";
import Image from "next/image";
import MissionThumb from "@/app/assets/images/mission-thumb.png";
import VissionThumb from "@/app/assets/images/vission-thumb.png";
export default function MissionVission() {
  return (
    <>
      <section>
        <div className='container 2xl:max-w-[1180px] lg:pb-[120px] pb-[80px] '>
          <div className='grid md:grid-cols-12 grid-cols-1 xl:gap-[60px] gap-[30px] lg:items-center mb-[40px]'>
            <div className='col-span-1 md:col-span-5 xl:col-span-4'>
              <Image className='' src={MissionThumb} alt='mission thumb' />
            </div>
            <div className='col-span-1 md:col-span-7 xl:col-span-8'>
              {/* <h4 className='subtitle mb-[5px]'>About Helion Edge</h4> */}
              <h2 className='section-title mb-[15px]'>Our Mission</h2>
              <p>
                At Helion Edge, we aim to revolutionize asset management by
                integrating cutting-edge technology with robust regulatory
                frameworks, providing institutional investors with unmatched
                transparency, security, and performance.
              </p>
            </div>
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 xl:gap-[60px] gap-[30px] lg:items-center'>
            <div className='col-span-1 md:col-span-5 xl:col-span-4 md:order-2'>
              <Image className='' src={VissionThumb} alt='mission thumb' />
            </div>
            <div className='col-span-1 md:col-span-7 xl:col-span-8 md:order-1'>
              {/* <h4 className='subtitle mb-[5px]'>About Helion Edge</h4> */}
              <h2 className='section-title mb-[15px]'>Our Vision</h2>
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
