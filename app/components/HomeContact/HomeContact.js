import React from "react";
import call from "../../assets/images/ccall.png";
import email from "../../assets/images/cemail.png";
import loc from "../../assets/images/cloc.png";
import img from "../../assets/images/image-900.png";
import Image from "next/image";

const HomeContact = () => {
  return (
    <div className='container  py-[20px] pb-[50px] lg:py-[120px] contact '>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[100px]'>
          <div className='contact_info md:py-[40px] md:px-[30px]'>
            <h3 className='text-[32px] xl:text-[48px] mt-0 mb-4 leading-[130%]'>
              Ready to Secure Your Digital Universe?
            </h3>
            <p className='mb-8'>
              It all begins with RECONNaissance. Join us to stay ahead of
              threats and safeguard your future.
            </p>
            <div className='contact_info_desc'>
              <div className='flex items-start gap-[20px] mb-[20px]'>
                <Image src={call} alt='call' />
                <div>
                  <p>Phone Number</p>
                  <h6>+971 (0)4 548 0355</h6>
                </div>
              </div>
              <div className='flex items-start gap-[20px] mb-[20px]'>
                <Image src={email} alt='email' />
                <div>
                  <p>Email Address</p>
                  <h6>info@helion-edge.com</h6>
                </div>
              </div>
              <div className='flex items-start gap-[20px]'>
                <Image src={loc} alt='loc' />
                <div>
                  <p>Office Address</p>
                  <h6>Burj Daman Tower, Dubai, UAE Office 1102C</h6>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <Image src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
