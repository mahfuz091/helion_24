import React from 'react'
import Image from 'next/image';
import AutomatedIcon from '@/app/assets/images/automated-icon.png';
import SecureIcon from '@/app/assets/images/secure-icon.png';
import ProductIcon from '@/app/assets/images/product-icon.png';

export default function Features() {
  return (
    <>
        <section className="features lg:py-[120px] py-[80px]">
            <div className="container">
                <div className="text-center mb-[60px]">
                    <h2 className='section-title'>Key Features</h2>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]'>
                    <div className='custom-shadow p-5 border border-[#E7EFF1] rounded-[20px]'>
                        <Image className='mb-[20px]' src={AutomatedIcon} alt='Automated Icon' />
                        <h4 className='mb-[16px] text-[24px] leading-[1.2]'>Automated Strategies</h4>
                        <p className='text-[16px]'>Leverage advanced, automated investment strategies for optimal returns.</p>
                    </div>
                    <div className='custom-shadow p-5 border border-[#E7EFF1] rounded-[20px]'>
                        <Image className='mb-[20px]' src={SecureIcon} alt='Secure Icon' />
                        <h4 className='mb-[16px] text-[24px] leading-[1.2]'>Transparent & Secure</h4>
                        <p className='text-[16px]'>Experience unparalleled transparency and security with our upcoming Asset Management platform.</p>
                    </div>
                    <div className='custom-shadow p-5 border border-[#E7EFF1] rounded-[20px]'>
                        <Image className='mb-[20px]' src={ProductIcon} alt='Product Icon' />
                        <h4 className='mb-[16px] text-[24px] leading-[1.2]'>Regulated Products</h4>
                        <p className='text-[16px]'>Our fully regulated products such as our fund in Luxembourg ensure compliance and trust.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
