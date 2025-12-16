import Image from 'next/image';
import React from 'react';

const ShopNowBanner = () => {
    return (
        <div>
            <div className="relative">
                <Image src={'/banner/Phoenix_10_A_modern_highquality_website_banner_showing_a_young_0.jpg'} width={800} className='mx-auto' height={200} alt='shop now bg'></Image>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#49271c]/90 via-[#49271c]/90 to-[#49271c]">

                            <div className='flex justify-center items-center space-y-4 flex-col  h-full'>
                                <h2 className='text-5xl font-semibold text-white'>Ready to get Shop On Top Cart?</h2>
                                <p className='text-white'>Explore millions of products from trusted suppliers by signing up today!</p>
                                <button className="btn text-white font-semibold bg-orange-500 border-none shadow-none ">Shop Now</button>
                            </div>

                </div>
            </div>
        </div>
    );
};

export default ShopNowBanner;