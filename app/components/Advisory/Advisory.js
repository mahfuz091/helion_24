import Image from "next/image";
import React from "react";
import ali from "../../assets/images/ali.png";
import bas from "../../assets/images/bas.png";
import gustavo from "../../assets/images/gustavo.png";
import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/Youtube.svg";
import Link from "next/link";

const Advisory = () => {
  return (
    <div className='container py-[40px]  xl:py-[100px]  our_team '>
      <div className=''>
        <h3 className='text-[30px] xl:text-[48px]  mb-[25px] xl:mb-[60px]'>
          Advisory Board
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
          <div className='team_card relative'>
            <Image src={ali} alt='team' />
            <h5>Ali Jaffari</h5>

            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              {/* <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link> */}
            </div>
          </div>
          <div className='team_card'>
            <Image src={bas} alt='team' />
            <h5>Bas Kooijman</h5>

            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              {/* <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link> */}
            </div>
          </div>
          <div className='team_card'>
            <Image src={gustavo} alt='team' />
            <h5>Gustavo Montero</h5>

            <div className='team-icon flex items-center gap-[10px] absolute transition-opacity duration-300   opacity-0'>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image src={linkedin} alt='team' />
              </Link>
              {/* <Link href='https://www.facebook.com/' target='_blank'>
                <Image src={facebook} alt='team' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image src={instagram} alt='team' />
              </Link>
              <Link href='https://www.youtube.com/' target='_blank'>
                <Image src={youtube} alt='team' />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
