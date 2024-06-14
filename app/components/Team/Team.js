"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import oliver from "../../assets/images/oliver.png";
import andress from "../../assets/images/andress.png";
import eashana from "../../assets/images/eashana.png";
import marvin from "../../assets/images/marven.png";
import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/Youtube.svg";
import Link from "next/link";
import Slider from "react-slick";
import SliderIcon1 from "@/app/assets/images/slider-icon1.png";
import SliderIcon2 from "@/app/assets/images/slider-icon2.png";
import SliderIcon3 from "@/app/assets/images/slider-icon3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const Team = () => {
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
    <div className='container pt-[40px]  xl:pt-[100px] our_team '>
      <div className=' '>
        <h3 className='text-[30px] xl:text-[48px]  mb-[25px] xl:mb-[60px]'>
          Our Team
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {/* <div className='team-slider -ml-[15px] -mr-[15px]'>
            <Slider ref={sliderRef} {...settings}>
              <div className='px-[15px]'>
                <div className='team_card team '>
                  <Image src={oliver} alt='team' />
                  <h5>Oliver von Wolff</h5>
                  <p>Founder & CEO</p>
                  <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
                    <Link href='https://www.linkedin.com/' target='_blank'>
                      <Image src={linkedin} alt='team' />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='px-[15px]'>
                <div className='team_card team'>
                  <Image src={andress} alt='team' />
                  <h5>Andreas Segieth</h5>
                  <p>Business Development Manager</p>
                  <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
                    <Link href='https://www.linkedin.com/' target='_blank'>
                      <Image src={linkedin} alt='team' />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='px-[15px]'>
                <div className='team_card team'>
                  <Image src={eashana} alt='team' />
                  <h5>Eshana Lutawan</h5>
                  <p>Marketing Manager</p>
                  <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
                    <Link href='https://www.linkedin.com/' target='_blank'>
                      <Image src={linkedin} alt='team' />
                    </Link>
                  </div>
                </div>
              </div>

              <div className='px-[15px]'>
                <div className='team_card team'>
                  <Image src={marvin} alt='team' />
                  <h5>Marvin Hohmann</h5>
                  <p>Investment Analyst</p>
                  <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
                    <Link href='https://www.linkedin.com/' target='_blank'>
                      <Image src={linkedin} alt='team' />
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div> */}

          <div className='team_card team relative'>
            <Image src={oliver} alt='team' />
            <h5>Oliver von Wolff</h5>
            <p>Founder & CEO</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
            </div>
          </div>
          <div className='team_card team'>
            <Image src={andress} alt='team' />
            <h5>Andreas Segieth</h5>
            <p>Business Development Manager</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
            </div>
          </div>
          <div className='team_card team'>
            <Image src={eashana} alt='team' />
            <h5>Eshana Lutawan</h5>
            <p>Marketing Manager</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
            </div>
          </div>
          <div className='team_card team'>
            <Image src={marvin} alt='team' />
            <h5>Marvin Hohmann</h5>
            <p>Investment Analyst</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
