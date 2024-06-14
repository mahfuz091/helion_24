import React from "react";
import call from "../../assets/images/ccall.png";
import email from "../../assets/images/cemail.png";
import loc from "../../assets/images/cloc.png";
import Image from "next/image";

const ContactArea = () => {
  return (
    <div className='container  py-[50px]  lg:py-[120px] contact '>
      {/* px-[15px] md:px-[76px] */}
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[100px]'>
          <div className='contact_info self-center'>
            <h3 className='text-[32px] xl:text-[48px]'>
              Ready to Secure Your Digital Universe?
            </h3>
            <p>
              It all begins with RECONNaissance. Join us to stay ahead of
              threats and safeguard your future.
            </p>
            <div className='contact_info_desc'>
              <div className='flex items-start gap-[20px] mb-[20px]'>
                <Image src={call} alt='call' />
                <div>
                  <p>Phone Number</p>
                  <a href='tel:+971045480355'>+971 (0)4 548 0355</a>
                </div>
              </div>
              <div className='flex items-start gap-[20px] mb-[20px]'>
                <Image src={email} alt='email' />
                <div>
                  <p>Email Address</p>
                  <a href='mailto:"info@helion-edge.com'>
                    info@helion-edge.com
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-[20px]'>
                <Image src={loc} alt='loc' />
                <div>
                  <p>Office Address</p>
                  <a>Burj Daman Tower, Dubai, UAE Office 1102C</a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid rgba(0, 0, 0, 0.10)" }}
            className='px-[30px] py-[40px]  bg-[#F5F5F5] rounded-[20px]'
          >
            <form action='#' className='contact_form'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px]'>
                <div>
                  <input type='text' placeholder='First Name*' />
                </div>
                <div>
                  <input type='text' name='' id='' placeholder='Last Name*' />
                </div>
              </div>
              <div className='mb-[20px]'>
                <input type='email' placeholder='Email' className='required' />
              </div>
              <div className='mb-[20px]'>
                <input type='text' placeholder='Subject*' />
              </div>
              <div className='mb-[20px]'>
                <textarea name='' id='' placeholder='Message*'></textarea>
              </div>
              <div>
                <input
                  className='thm_btn cursor-pointer'
                  type='submit'
                  value='Book a schedule call'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
