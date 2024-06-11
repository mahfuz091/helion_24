import Image from "next/image";
import React from "react";
import oliver from "../../assets/images/oliver.png";
import andress from "../../assets/images/andress.png";
import eashana from "../../assets/images/eashana.png";

const Team = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] our_team '>
      <div className='px-[76px] '>
        <h3>Our Team</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
          <div className='team_card'>
            <Image src={oliver} alt='team' />
            <h5>Oliver von Wolff</h5>
            <p>Founder & CEO</p>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='45'
                height='46'
                viewBox='0 0 45 46'
                fill='none'
              >
                <path
                  d='M44.5 22.8271C44.5 34.9774 34.6503 44.8271 22.5 44.8271C10.3497 44.8271 0.5 34.9774 0.5 22.8271C0.5 10.6769 10.3497 0.827148 22.5 0.827148C34.6503 0.827148 44.5 10.6769 44.5 22.8271Z'
                  fill='#38B6FF'
                  stroke='url(#paint0_linear_2011_928)'
                />
                <path
                  d='M18 20.3271C19.1046 20.3271 20 19.4317 20 18.3271C20 17.2226 19.1046 16.3271 18 16.3271C16.8954 16.3271 16 17.2226 16 18.3271C16 19.4317 16.8954 20.3271 18 20.3271Z'
                  fill='white'
                />
                <path
                  d='M19.6667 21.3271H16.3333C16.1493 21.3271 16 21.4531 16 21.6084V30.0459C16 30.2011 16.1493 30.3271 16.3333 30.3271H19.6667C19.8507 30.3271 20 30.2011 20 30.0459V21.6084C20 21.4531 19.8507 21.3271 19.6667 21.3271Z'
                  fill='white'
                />
                <path
                  d='M27.9733 20.5101C26.7712 20.0795 25.2677 20.4578 24.366 21.136C24.3351 21.0095 24.2248 20.9154 24.0938 20.9154H21.2812C21.126 20.9154 21 21.0472 21 21.2095V30.033C21 30.1954 21.126 30.3271 21.2812 30.3271H24.0938C24.249 30.3271 24.375 30.1954 24.375 30.033V23.6919C24.8295 23.2825 25.4151 23.1519 25.8943 23.3648C26.3589 23.5701 26.625 24.0713 26.625 24.7389V30.033C26.625 30.1954 26.751 30.3271 26.9062 30.3271H29.7188C29.874 30.3271 30 30.1954 30 30.033V24.1466C29.9679 21.7295 28.8806 20.8348 27.9733 20.5101Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_2011_928'
                    x1='22.5'
                    y1='0.327148'
                    x2='22.5'
                    y2='45.3271'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop
                      offset='0.518502'
                      stop-color='white'
                      stop-opacity='0'
                    />
                    <stop offset='1' stop-color='#38B6FF' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className='team_card'>
            <Image src={andress} alt='team' />
            <h5>Andreas Segieth</h5>
            <p>Business Development Manager</p>
          </div>
          <div className='team_card'>
            <Image src={andress} alt='team' />
            <h5>Eshana Lutawan</h5>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
