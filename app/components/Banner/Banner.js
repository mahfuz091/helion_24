import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerThumb from "@/app/assets/images/banner-screen-thumb.png";
import BannerShapeTop from "@/app/assets/images/banner-shape-top.png";
import BannerShapeBottom from "@/app/assets/images/banner-shape-bottom.png";
export default function Banner() {
  return (
    <>
      <section className='banner-area'>
        <div className='container 2xl:max-w-[1460px]'>
          <div className='relative z-10 bg-gradient-to-l to-[#E9F7FF] from-[#C5EAFF] rounded-[30px] pt-[80px] px-[40px] text-center'>
            <h1 className='main-title max-w-[705px] mx-auto mb-[30px]'>
              Automated Asset <br /> Management
            </h1>
            <Link
              className='bg-primary-color py-[17px] px-[40px] inline-block font-bold text-white rounded-[1000px] shadow-[0_24px_34px_#C1DEEE] mb-[60px] transition-all duration-300 hover:bg-title-color'
              href='/contact'
            >
              Book a schedule call
            </Link>
            <Image
              className='mx-auto z-10'
              src={BannerThumb}
              alt='Banner thumb'
            />
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
      </section>
    </>
  );
}
