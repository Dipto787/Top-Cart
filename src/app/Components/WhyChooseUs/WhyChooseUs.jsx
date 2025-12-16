'use client';

import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <TbTruckDelivery size={36} />,
      title: "Free Delivery",
      desc: "Free Bangladesh delivery within 6–10 business days.",
    },
    {
      icon: <MdOutlineWifiCalling3 size={36} />,
      title: "24/7 Support",
      desc: "Email us anytime at support@topcart.com",
    },
    {
      icon: <FiRefreshCcw size={36} />,
      title: "Easy Returns",
      desc: "14-day worry-free return policy. T&Cs apply.",
    },
    {
      icon: <RiSecurePaymentLine size={36} />,
      title: "Secure Payment",
      desc: "All payment processes are fully encrypted.",
    },
  ];

  return (
    <section className="bg-[#f4f5f8] py-12">
      <div className="container mx-auto px-4">

        {/* Highlight Bar */}
        <div className="bg-[#fef3e1] rounded-lg py-3 mb-10">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-800">
            <li>🚚 Free Delivery</li>
            <li>💯 Satisfaction Promised</li>
            <li>📞 Excellent Support</li>
            <li>🔒 Secure Payment</li>
          </ul>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                p-6
                text-center
                shadow-sm
                hover:shadow-lg
                transition
                duration-300
                group
              "
            >
              <div className="
                mx-auto
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-[#ff9400]/10
                text-[#ff9400]
                group-hover:bg-[#ff9400]
                group-hover:text-black
                transition
              ">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
