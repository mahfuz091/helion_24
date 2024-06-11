import Image from "next/image";
import React from "react";
import leading from "../../assets/images/leading.png";

const LeadingManagement = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] '>
      <div className='px-[76px] grid grid-cols-1 md:grid-cols-2 gap-[99px]'>
        <div className='yield_leading'>
          <h3>Leading the Future of Asset Management</h3>
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
