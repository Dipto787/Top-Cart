'use client';

import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[900px] md:h-[600px] lg:h-[700px]">
        <Image
          src="/banner/pexels-fauxels-3184416.jpg"
          alt="Hero Banner"
          fill
          className="object-cover brightness-90"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#49271c]/90 via-[#49271c]/40 to-[#49271c]/90"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-6xl mx-auto px-4 md:px-10 space-y-8">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left leading-snug">
            Trade with confidence <br className="hidden md:block" />
            from production quality to purchase protection
          </h1>

          {/* Info Cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            
            {/* Card 1 */}
            <div className="flex-1 bg-gradient-to-r from-[#49271c]/80 via-[#49271c]/30 to-[#49271c]/80 p-6 md:p-10 rounded-xl shadow-lg flex flex-col items-center text-center md:text-left hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">Ensure production quality with</h2>
              <Image
                src="/banner/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.avif"
                alt="Verified Suppliers"
                width={150}
                height={150}
                className="mb-4"
              />
              <p className="text-white text-sm mb-4">
                Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.
              </p>
              <button className="text-white underline hover:text-[#ff9400] transition">Learn More</button>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-gradient-to-r from-[#49271c]/80 via-[#49271c]/40 to-[#49271c]/80 p-6 md:p-10 rounded-xl shadow-lg flex flex-col items-center text-center md:text-left hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">Protect your purchase with</h2>
              <Image
                src="/banner/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.avif"
                alt="Secure Payment"
                width={150}
                height={150}
                className="mb-4"
              />
              <p className="text-white text-sm mb-4">
                Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.
              </p>
              <button className="text-white underline hover:text-[#ff9400] transition">Learn More</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
