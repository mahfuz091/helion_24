import Image from "next/image";
import React from "react";
import leading from "../../assets/images/leading.png";

const LeadingManagement = () => {
  return (
    <div className='container pt-[40px]  xl:pt-[100px] '>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-[30px] lg:gap-[60px]  '>
        <div className='yield_leading self-center col-span-1 md:col-span-7 xl:col-span-8 '>
          <h3 className='text-[30px] xl:text-[48px]  '>
            Leading the Future of Asset Management
          </h3>
          <p>
            Akkrue is a specialized entity operating at the intersection of
            technology and finance, dedicated to providing advanced solutions in
            the field of decentralized finance and digital asset management.
          </p>
        </div>
        <div className='col-span-1 md:col-span-5 xl:col-span-4 '>
          <Image src={leading} alt='automation' />
        </div>
      </div>
    </div>
  );
};

export default LeadingManagement;
