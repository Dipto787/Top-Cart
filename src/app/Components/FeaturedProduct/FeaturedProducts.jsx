'use client';
import { useEffect, useState } from "react";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
const FeaturedProducts = () => {
    // let [featuredProduct, setFeaturedProduct] = useState([]);
    // useEffect(() => {
    //     let fetchFeaturedProduct = async () => {
    //         let res = await fetch('http://localhost:3000/api/product');
    //         let data = await res.json();
    //         const categories = [...new Set(data.map(item => item.category))];
    //         const selectedProducts = [];
    //         categories.forEach(cat => {
    //             const items = data.filter(item => item.category === cat).slice(0, 6);
    //             selectedProducts.push(...items);
    //         })
    //         setFeaturedProduct(selectedProducts);
    //     };
    //     fetchFeaturedProduct();

    // }, [])
    // console.log(featuredProduct)

    let [mostSoldProduct, setMostSoldProduct] = useState([]);
    let [newArrivalProduct, setNewArrivalProduct] = useState([]);
    useEffect(() => {
        let fetchFeaturedProduct = async () => {
            let res = await fetch('http://localhost:3000/api/product');
            let data = await res.json();
            const soldProducts = data.filter(product => product.sold !== undefined);
            // Sort descending by sold 
            const items = soldProducts.sort((a, b) => b.sold - a.sold);
            setMostSoldProduct(items);
            const newArrival = data.slice(-20).reverse();
            setNewArrivalProduct(newArrival);
        };
        fetchFeaturedProduct();

    }, [])
    console.log(newArrivalProduct)


    return (
        <div className="container p-16 mx-auto my-20">
            <h2 className="text-3xl font-bold">Discover your next business opportunity</h2>

            <div className="flex justify-between my-6">
                <div className="w-[30%]">
                    <h4 className="text-2xl mb-4 font-semibold">Top Ranking</h4>
                    <div className="bg-white p-4   rounded-2xl">

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000000',
                            }}

                            navigation={true}
                            loop={mostSoldProduct.length > 1}
                            slidesPerView={1}
                            spaceBetween={20}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                mostSoldProduct?.map((product) => {
                                    return (

                                        <SwiperSlide key={product._id} className="space-y-4 p-4 bg-white rounded-2xl flex flex-col items-center">
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-xl">Hot Selling</h2>
                                                <p> price : ${product.price}</p>
                                            </div>
                                            <h2 className="text-[#837974] text-center">{product?.title}</h2>

                                            <Image
                                                src={product?.images[0]}
                                                width={300}
                                                height={300}
                                                alt="slide"
                                                className="mx-auto h-60 object-contain"
                                            />

                                            {/* Button stays below the image */}
                                            <button className="btn bg-black w-full text-white py-2 rounded-lg mt-4">
                                                Add To Cart
                                            </button>
                                        </SwiperSlide>

                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>


                <div className="w-[30%]    ">
                    <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-semibold">New arrivals</h4>
                        <Link href={''} className="underline">View More</Link>
                    </div>
                    <div className="space-y-6 mt-3 rounded-2xl  bg-white p-10">
                        <h2>{newArrivalProduct.length}+ Products Added Recently</h2>

                        <div className="grid gap-5 grid-cols-2">
                            {
                                newArrivalProduct?.slice(0, 6).map((product) => {
                                    return (

                                        <div className="bg-[#f4f4f4] rounded-xl p-4 h-[120px]" key={product._id}>
                                            <Image
                                                src={product?.images[0]}
                                                width={200}
                                                height={200}
                                                className=""
                                                alt="slide"
                                            />
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>







                <div className="w-[30%] ">
                    <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-semibold">Featured selections</h4>
                        <Link href={''} className="underline">View More</Link>
                    </div>
                    <div className="space-y-6 mt-3 rounded-2xl bg-white p-10">
                        <h2>Deal on Best Sellers</h2>

                        <div className="space-y-10">
                            <Image src={'/banner/images (41).jpg'} width={400} height={400} alt="best sell"></Image>
                            <Image src={'/banner/images (55).jpg'} width={400} height={400} alt="best sell"></Image>
                        </div>

                    </div>
                </div>



                {/* 
                <div className="w-[30%]">
                    <h4>Top Ranking</h4>
                    <div>
                        <h2>Hot Selling</h2>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}

                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                mostSoldProduct?.map((product) => {
                                    return ( 

                                            <SwiperSlide>
                                                <Image
                                                    src={product?.images[0]}
                                                    width={200}
                                                    height={200}
                                                    alt="slide"
                                                />
                                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                            </SwiperSlide> 
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>  */}




            </div>

        </div>
    );
};

export default FeaturedProducts;