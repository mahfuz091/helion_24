"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderIcon1 from "@/app/assets/images/slider-icon1.png";
import SliderIcon2 from "@/app/assets/images/slider-icon2.png";
import SliderIcon3 from "@/app/assets/images/slider-icon3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CustomPrevArrow = ({ onClick, isHidden }) => (
  <span
    className={`slick-arrow slider-prev ${isHidden ? "hidden" : ""}`}
    onClick={onClick}
  >
    <FaArrowLeft />
  </span>
);

const CustomNextArrow = ({ onClick, isHidden }) => (
  <span
    className={`slick-arrow slider-next ${isHidden ? "hidden" : ""}`}
    onClick={onClick}
  >
    <FaArrowRight />
  </span>
);

export default function InnovativeStrategies() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(
        sliderRef.current.innerSlider.props.children.length -
          sliderRef.current.innerSlider.props.slidesToShow
      );
    }
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: <CustomPrevArrow isHidden={currentSlide === 0} />,
    nextArrow: <CustomNextArrow isHidden={currentSlide >= totalSlides} />,
    dots: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className='overflow-hidden py-[120px]'>
        <div className='container'>
          <div className='mb-[60px]'>
            <h4 className='subtitle mb-[5px]'>Innovative Strategies</h4>
            <h2 className='section-title mb-[15px]'>
              Market Neutral Yield Strategies
            </h2>
            <p>
              Our strategies dynamically pair low-volatility, high-reward
              assets, creating stable, risk-averse investment opportunities.
              Ideal for investors seeking steady income with reduced market
              risk, our Helion InnoVault strategy provides consistent returns
              regardless of market direction. By leveraging both long and short
              positions, we generate yield from trading fees and farming
              rewards, with automated rebalancing to maintain optimal exposure
              and minimize costs during low volatility.
            </p>
          </div>
          <div className='innovative-slider -ml-[15px] -mr-[15px]'>
            <Slider ref={sliderRef} {...settings}>
              {/* single slider  */}
              <div className='px-[15px]'>
                <div className='p-5 border border-[#E7EFF1] rounded-[10px]'>
                  <Image
                    className='mb-[20px]'
                    src={SliderIcon1}
                    alt='Slider icon 1'
                  />
                  <h4 className='mb-[10px] text-[24px] leading-[1.2]'>
                    Automated Rebalancing
                  </h4>
                  <p className='text-[16px] text-[#525468]'>
                    Maintains optimal exposure and health
                  </p>
                </div>
              </div>

              {/* single slider  */}
              <div className='px-[15px]'>
                <div className='p-5 border border-[#E7EFF1] rounded-[10px]'>
                  <Image
                    className='mb-[20px]'
                    src={SliderIcon2}
                    alt='Slider icon 2'
                  />
                  <h4 className='mb-[10px] text-[24px] leading-[1.2]'>
                    Cost Efficiency
                  </h4>
                  <p className='text-[16px] text-[#525468]'>
                    Reduces costs during low volatility periods
                  </p>
                </div>
              </div>
              {/* single slider  */}
              <div className='px-[15px]'>
                <div className='p-5 border border-[#E7EFF1] rounded-[10px]'>
                  <Image
                    className='mb-[20px]'
                    src={SliderIcon3}
                    alt='Slider icon 3'
                  />
                  <h4 className='mb-[10px] text-[24px] leading-[1.2]'>
                    Dynamic Pairing
                  </h4>
                  <p className='text-[16px] text-[#525468]'>
                    Targets low-volatility, high-reward pairs
                  </p>
                </div>
              </div>
              {/* single slider  */}
              <div className='px-[15px]'>
                <div className='p-5 border border-[#E7EFF1] rounded-[10px]'>
                  <Image
                    className='mb-[20px]'
                    src={SliderIcon1}
                    alt='Slider icon 1'
                  />
                  <h4 className='mb-[10px] text-[24px] leading-[1.2]'>
                    Automated Rebalancing
                  </h4>
                  <p className='text-[16px] text-[#525468]'>
                    Maintains optimal exposure and health
                  </p>
                </div>
              </div>
              {/* single slider  */}
              <div className='px-[15px]'>
                <div className='p-5 border border-[#E7EFF1] rounded-[10px]'>
                  <Image
                    className='mb-[20px]'
                    src={SliderIcon1}
                    alt='Slider icon 1'
                  />
                  <h4 className='mb-[10px] text-[24px] leading-[1.2]'>
                    Automated Rebalancing
                  </h4>
                  <p className='text-[16px] text-[#525468]'>
                    Maintains optimal exposure and health
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className='text-center mt-[30px]'>
            <Link
              className='mt-6  bg-primary-color py-[11px] px-[20px] text-[#F4F5F7] font-bold rounded-full shadow-[0_24px_34px_#C1DEEE] inline-block transition-all duration-300 hover:bg-title-color'
              href='https://www.helion-edge.io/'
              target='_blank'
            >
              Explorer our strategies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
