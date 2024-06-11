"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaTimesCircle } from "react-icons/fa";
import HeaderLogo from "@/public/images/logo.png";
import { IconContext } from "react-icons";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const currentPage = usePathname();
  console.log(currentPage);
  const handleClick = (e) => {
    // 👇️ toggle isActive state on click
    setIsActive(true);
  };

  const handleClose = (e) => {
    setIsActive(false);
  };
  return (
    <>
      <header header className='py-5 relative top-0 w-full z-50 bg-transparent'>
        <div className='container flex items-center justify-between'>
          <Link href='/'>
            <Image src={HeaderLogo} alt='Header logo' />
          </Link>
          <ul className='ml-auto lg:flex xl:space-x-[50px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-black hidden'>
            <li>
              <Link href='/' className='transition hover:text-pink'>
                Home
              </Link>
            </li>
            <li>
              <Link href='solution' className='transition hover:text-pink'>
                Solution
              </Link>
            </li>
            <li>
              <Link href='about' className='transition hover:text-pink'>
                About us
              </Link>
            </li>
          </ul>
          <ul className='xl:ml-[30px] ml-auto space-x-[30px] lg:flex items-center'>
            <li className='hidden lg:block'>
              <Link
                className='bg-black xl:px-[35px] lg:px-[30px] xl:py-[17px] lg:py-[13px]'
                href='/'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div
            className='text-2xl menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white'
            onClick={handleClick}
          >
            <IconContext.Provider value={{ style: { fill: "url(#gradient)" } }}>
              <svg width='0' height='0'>
                <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#D116BF' />
                  <stop offset='100%' stopColor='#3016D1' />
                </linearGradient>
              </svg>
              <HiMiniBars3BottomRight />
            </IconContext.Provider>
          </div>
        </div>
      </header>

      <div
        className={`${
          isActive ? "active" : "closed"
        } offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}
      >
        <FaTimesCircle
          className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]'
          onClick={handleClose}
        ></FaTimesCircle>
        <div className='logo mb-[30px]'>
          <Link href='/'>
            <img src={HeaderLogo.src} alt='' />
          </Link>
        </div>
        <ul className='space-y-[15px] text-[16px] font-medium text-white mb-[20px]'>
          <li>
            <Link href='/' className='transition hover:text-pink'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/' className='transition hover:text-pink'>
              Solution
            </Link>
          </li>
          <li>
            <Link href='/' className='transition hover:text-pink'>
              About us
            </Link>
          </li>
        </ul>
        <ul>
          <li className=''>
            <Link
              className='gradient-border px-[30px] py-[13px] w-full !block text-center'
              href='/'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
