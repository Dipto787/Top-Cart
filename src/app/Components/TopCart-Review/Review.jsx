"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        "id": 1,
        "name": "Rahim Ahmed",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "TopCart offers excellent product quality. I am completely satisfied with my purchase.",
        "avatar": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        "id": 2,
        "name": "Nusrat Jahan",
        "role": "Regular Customer",
        "rating": 4,
        "comment": "Delivery was on time and the packaging was really impressive.",
        "avatar": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        "id": 3,
        "name": "Tanvir Hasan",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "TopCart has become my favorite online store. Prices are very reasonable.",
        "avatar": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        "id": 4,
        "name": "Mahi Akter",
        "role": "Customer",
        "rating": 4,
        "comment": "The product was exactly as described. Highly recommended!",
        "avatar": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        "id": 5,
        "name": "Sabbir Hossain",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "Customer support was very helpful and resolved my issue quickly.",
        "avatar": "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        "id": 6,
        "name": "Rima Khatun",
        "role": "Customer",
        "rating": 4,
        "comment": "The website is easy to use and checkout process is smooth.",
        "avatar": "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
        "id": 7,
        "name": "Arif Khan",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "Amazing shopping experience. I will definitely shop again.",
        "avatar": "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        "id": 8,
        "name": "Jannatul Ferdous",
        "role": "Customer",
        "rating": 4,
        "comment": "Good quality products at affordable prices.",
        "avatar": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        "id": 9,
        "name": "Imran Hossain",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "Fast delivery and genuine products. Very trustworthy platform.",
        "avatar": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        "id": 10,
        "name": "Sadia Rahman",
        "role": "Regular Customer",
        "rating": 4,
        "comment": "I really like the variety of products available on TopCart.",
        "avatar": "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
        "id": 11,
        "name": "Hasan Mahmud",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "The product quality exceeded my expectations.",
        "avatar": "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
        "id": 12,
        "name": "Farzana Islam",
        "role": "Customer",
        "rating": 4,
        "comment": "Simple ordering process and quick delivery service.",
        "avatar": "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
        "id": 13,
        "name": "Mehedi Hasan",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "Great value for money. Highly satisfied with TopCart.",
        "avatar": "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        "id": 14,
        "name": "Tania Akter",
        "role": "Customer",
        "rating": 4,
        "comment": "Nice packaging and original products.",
        "avatar": "https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
        "id": 15,
        "name": "Rakib Uddin",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "TopCart delivers exactly what they promise.",
        "avatar": "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        "id": 16,
        "name": "Nabila Sultana",
        "role": "Regular Customer",
        "rating": 4,
        "comment": "Overall a very pleasant shopping experience.",
        "avatar": "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
        "id": 17,
        "name": "Shakil Ahmed",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "Secure payment system and fast service.",
        "avatar": "https://randomuser.me/api/portraits/men/27.jpg"
    },
    {
        "id": 18,
        "name": "Anika Rahman",
        "role": "Customer",
        "rating": 4,
        "comment": "Good customer service and easy returns.",
        "avatar": "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        "id": 19,
        "name": "Fahim Chowdhury",
        "role": "Verified Buyer",
        "rating": 5,
        "comment": "One of the best online shopping platforms I have used.",
        "avatar": "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
        "id": 20,
        "name": "Sumaiya Noor",
        "role": "Customer",
        "rating": 4,
        "comment": "Reliable service and quality products every time.",
        "avatar": "https://randomuser.me/api/portraits/women/30.jpg"
    }
];


export default function TestimonialSlider() {
    return (
     <section className="container mx-auto py-16 px-4">
      
      {/* Heading */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#51200b] leading-snug">
          Get tailored discounts, services, and tools for your business stage.
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl">
          Grow with curated benefits offered by the free Alibaba.com Membership, whether you are a small business needing the essentials to start sourcing or a well-established enterprise looking for tools and solutions for more complex orders.
        </p>
        <button className="underline text-lg sm:text-xl font-semibold hover:text-[#ff9400] transition">
          Learn More
        </button>
      </div>

      {/* Slider */}
      <div className="mt-16 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#fffaf5] rounded-2xl p-6 h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
                
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#ff9400]"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-[#49271c]">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 flex-grow text-sm sm:text-base mb-4 leading-relaxed">
                  “{item.comment}”
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < item.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    );
}
