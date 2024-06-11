import Image from "next/image";
import React from "react";
import plans from "../../assets/images/plans.png";

const FuturePlans = () => {
  return (
    <div className='container 2xl:max-w-[1460px] mt-[100px] '>
      <div className='px-[76px] grid grid-cols-1 md:grid-cols-2 gap-[70px]'>
        <Image src={plans} alt='plans' />
        <div className='yield_plans'>
          <h3>Our Future Plans for Platform Development</h3>
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
