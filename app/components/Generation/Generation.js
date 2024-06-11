import Image from "next/image";
import React from "react";
import audit from "../../assets/images/audited.png";
import drag from "../../assets/images/drag.png";
import api from "../../assets/images/api.png";
import customized from "../../assets/images/customized.png";

const Generation = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] generation'>
      <div className='px-[76px] grid grid-cols-1 md:grid-cols-2 gap-[16px] generation_head'>
        <h3>
          Next-Generation On-Chain, Non-Custodial & Automated Digital Asset
          Management Platform
        </h3>
        <p>
          Helion Edge is designed for institutional investors, offering a
          non-custodial asset management platform. Our platform enables users to
          execute their investment strategies on-chain or leverage our pre-built
          strategies. We will also provide a customizable white-label solution,
          allowing clients such as banks to brand the platform as their own.
          This will include three standard white-label options with the
          flexibility to tailor solutions based on specific client requirements.
        </p>
      </div>
      <div className='generation_cards'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
          <div className='generation_card'>
            <Image src={audit} alt='audit' />
            <h4>Non-Custodial & Audited</h4>
            <p>
              We are ensuring asset safety with a fully audited and secure
              platform, providing peace of mind for users.
            </p>
          </div>
          <div className='generation_card'>
            <Image src={drag} alt='drag' />
            <h4>Drag & Drop Interface</h4>
            <p>
              We are developing an intuitive no-code/low-code interface to
              enable effortless creation of vaults and derivative assets.
            </p>
          </div>
          <div className='generation_card'>
            <Image src={api} alt='api' />
            <h4>Powerful SDK & API</h4>
            <p>
              Our team is working on a robust API that will allow for seamless
              implementation of automated investment strategies and efficient
              movement of assets.
            </p>
          </div>
          <div className='generation_card'>
            <Image src={customized} alt='customized' />
            <h4>Customized Portfolio Allocation</h4>
            <p>
              We are tailoring strategies for yield-generating protocols and
              stable or pegged assets, catering specifically to institutional
              investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
