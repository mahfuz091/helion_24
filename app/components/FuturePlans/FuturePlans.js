import Image from "next/image";
import React from "react";
import plans from "../../assets/images/plans.png";

const FuturePlans = () => {
  return (
    <div className='container  pt-[40px]  xl:pt-[100px] '>
      {/* flex flex-col md:flex-row */}
      <div className=' grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[70px]'>
        <div className='col-span-1 md:w-[50%] lg:w-full lg:col-span-4 '>
          <Image className='' src={plans} alt='plans' />
        </div>
        <div className='yield_plans lg:col-span-8 self-center'>
          <h3 className='text-[25px] xl:text-[35px]  '>
            Our Future Plans for Platform Development
          </h3>
          <p>
            As we continue to develop Helion Edge, our next steps focus on
            enhancing and expanding our platform to offer even greater value to
            our users. Our forthcoming developments include:
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
