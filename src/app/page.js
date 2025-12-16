'use client';
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import ShopByCategory from "./Components/Category/ShopByCategory";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import FeaturedProducts from "./Components/FeaturedProduct/FeaturedProducts";
import HeroBanner from "./Components/Banner/HeroBanner";
import TestimonialSlider from "./Components/TopCart-Review/Review";
import ShopNowBanner from "./Components/ShopNowBanner/ShopNowBanner";


export default function Home() {
  let [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      let res = await fetch('/category.json');
      let data = await res.json();
      console.log('fdfadsfdasfdsffdfd', data)
      setCategories(data);
    };
    fetchCategories();
  }, [])
  return (
    <div>
      <ShopByCategory categories={categories}></ShopByCategory>
      <div className="relative ">
        <Banner />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>
      <WhyChooseUs></WhyChooseUs>
      <div className="bg-[#f4f4f4]">
        <FeaturedProducts></FeaturedProducts>
      </div>
      <HeroBanner></HeroBanner>
      <div className="bg-[#f7f2f0] mt-28">
        <TestimonialSlider></TestimonialSlider>
      </div>
      <ShopNowBanner></ShopNowBanner>
    </div>
  );
}
