import Image from "next/image";
import React from "react";
import plans from "../../assets/images/plans.png";

const FuturePlans = () => {
  return (
    <div className='container  pt-[40px]  xl:pt-[100px] '>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[70px]'>
        <Image className='self-center' src={plans} alt='plans' />
        <div className='yield_plans self-center'>
          <h3 className='text-[25px] xl:text-[40px]  '>
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
