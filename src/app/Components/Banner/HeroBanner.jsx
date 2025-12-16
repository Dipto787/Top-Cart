import Image from "next/image";

const HeroBanner = () => {
    return (
        <div>
           <div className="relative ">
             <Image src={'/banner/pexels-fauxels-3184416.jpg'} width={1200} height={500} alt="hero" className="mx-auto opacity-85"></Image>
             <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#49271c] via-[#49271c]/40 to-[#49271c]">
               <div className=" flex flex-col justify-center  h-full mx-auto max-w-[1000px] my-8" >
                 <h1 className="text-4xl font-semibold text-white">Trade with confidence from <br></br> production quality to purchase protection</h1>
                 <div className="flex  gap-4 my-8">

                    <div className="text-white rounded-xl space-y-4 bg-gradient-to-r from-[#49271c]/80 via-[#49271c]/20 to-[#49271c] p-10">
                        <h2>Ensure production quality with</h2>
                        <Image src={'/banner/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.avif'} width={200} height={200}></Image>
                        <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
                         <button className="underline">Learn More</button>
                    </div>

                    <div className="text-white rounded-xl space-y-4 bg-gradient-to-r from-[#49271c]/80 via-[#49271c]/40 to-[#49271c] p-10">
                        <h2>Protect your purchase with</h2>
                        <Image src={'/banner/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.avif'} width={200} height={200}></Image>
                        <p>Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.</p>
                        <button className="underline">Learn More</button>
                    </div>
                    
                 


                 </div>
               </div>
             </div>
           </div>
        </div>
    );
};

export default HeroBanner;