import Image from "next/image";
import React from "react";
import leading from "../../assets/images/leading.png";

const LeadingManagement = () => {
  return (
    <div className='container pt-[40px]  xl:pt-[100px] '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[99px]  '>
        <div className='yield_leading self-center '>
          <h3 className='text-[30px] xl:text-[48px]  '>
            Leading the Future of Asset Management
          </h3>
          <p>
            Akkrue is a specialized entity operating at the intersection of
            technology and finance, dedicated to providing advanced solutions in
            the field of decentralized finance and digital asset management.
          </p>
        </div>
        <Image src={leading} alt='automation' />
      </div>
    </div>
  );
};

export default LeadingManagement;
