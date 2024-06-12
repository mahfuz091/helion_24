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
      <div
        className={`${
          isActive ? "left-0" : "-left-[100vw]"
        } fixed top-0 h-full w-[100vw] bg-black z-[45] opacity-50 transition-[opacity] transition-all duration-500`}
        onClick={handleClose}
      ></div>
      <header
        header
        className='py-[30px] relative top-0 w-full z-40 bg-transparent'
      >
        <div className='container flex items-center justify-between'>
          <Link href='/'>
            <Image src={HeaderLogo} alt='Header logo' />
          </Link>
          <ul className='ml-auto lg:flex xl:space-x-[20px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-[#111111] hidden'>
            <li>
              <Link href='/' className='transition hover:text-primary-color'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='solution'
                className='transition hover:text-primary-color'
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                href='about'
                className='transition hover:text-primary-color'
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className='ml-[30px] space-x-[30px] lg:flex items-center'>
            <li className='hidden lg:block'>
              <Link
                className='bg-primary-color py-[11px] px-[20px] text-[#F4F5F7] font-bold rounded-full shadow-[0_24px_34px_#C1DEEE] inline-block transition-all duration-300 hover:bg-title-color'
                href='contact'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div
            className='text-[30px] menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white'
            onClick={handleClick}
          >
            <IconContext.Provider value={{ style: { fill: "url(#gradient)" } }}>
              <svg width='0' height='0'>
                <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='100%'>
                  <stop offset='0%' stopColor='#C5EAFF' />
                  <stop offset='100%' stopColor='#38B6FF' />
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
        } offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-white top-0 lg:hidden left-[-250px] transition-all`}
      >
        <FaTimesCircle
          className='absolute right-[15px] top-[25px] z-10 text-title-color text-[24px]'
          onClick={handleClose}
        ></FaTimesCircle>
        <div className='logo mb-[30px]'>
          <Link href='/'>
            <img src={HeaderLogo.src} alt='' />
          </Link>
        </div>
        <ul className='space-y-[15px] text-[16px] font-medium text-title-color mb-[20px]'>
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
        <ul className='mt-5'>
          <li>
            <Link
              className='bg-primary-color py-[11px] px-[20px] text-[#F4F5F7] font-bold rounded-full shadow-[0_24px_34px_#C1DEEE] inline-block transition-all duration-300 hover:bg-title-color'
              href='contact'
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
