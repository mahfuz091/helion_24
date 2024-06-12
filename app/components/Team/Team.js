import Image from "next/image";
import React from "react";
import oliver from "../../assets/images/oliver.png";
import andress from "../../assets/images/andress.png";
import eashana from "../../assets/images/eashana.png";
import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/Youtube.svg";
import Link from "next/link";

const Team = () => {
  return (
    <div className='container pt-[40px]  xl:pt-[100px] our_team '>
      <div className=' '>
        <h3 className='text-[30px] xl:text-[48px]  mb-[25px] xl:mb-[60px]'>
          Our Team
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
          <div className='team_card relative'>
            <Image src={oliver} alt='team' />
            <h5>Oliver von Wolff</h5>
            <p>Founder & CEO</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link>
            </div>
          </div>
          <div className='team_card'>
            <Image src={andress} alt='team' />
            <h5>Andreas Segieth</h5>
            <p>Business Development Manager</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link>
            </div>
          </div>
          <div className='team_card'>
            <Image src={eashana} alt='team' />
            <h5>Eshana Lutawan</h5>
            <p>Marketing Manager</p>
            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
