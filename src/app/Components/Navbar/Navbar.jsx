'use client';

import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import ShopByCategory from "../Category/ShopByCategory";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  let { data: session, status } = useSession();
  console.log(session)
  const pathname = usePathname();
  const disableNav = pathname === "/login" || pathname === "/register";
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
      {!disableNav && <header className=" bg-black shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/topcart-logo.png"
                width={90}
                height={35}
                alt="TopCart Logo"
                priority
              />
            </Link>

            {/* Search (Desktop only) */}
            <div className="hidden lg:flex flex-1 max-w-xl">
              <div className="flex w-full rounded-md overflow-hidden bg-white">
                <input
                  type="text"
                  placeholder="Search products on TopCart"
                  className="flex-1 px-4 py-2 text-sm outline-none"
                />
                <button className="bg-[#ff9400] px-4 flex items-center justify-center">
                  <IoIosSearch size={22} className="text-black" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">

              {/* Wishlist */}
              <div className="hidden sm:flex flex-col items-center cursor-pointer group">
                <FaHeart className="text-white text-xl group-hover:text-[#ff9400]" />
                <span className="text-xs font-semibold text-white">WISHLIST</span>
              </div>

              {/* Cart */}
              <div className="flex flex-col items-center cursor-pointer group relative">
                <GiShoppingBag className="text-white text-2xl group-hover:text-[#ff9400]" />
                <span className="absolute -top-1 -right-2 bg-[#ff9400] text-white text-xs font-bold rounded-full px-2">
                  0
                </span>
                <span className="text-xs font-semibold text-white">CART</span>
              </div>

              {/* User Dropdown */}
              <div className="dropdown dropdown-end">
                <Link href={'/login'}
                  className="
    px-5 py-3 rounded-md
    text-white text-sm font-medium
    bg-blue-600
    hover:bg-blue-500
    transition-colors duration-200
  "
                >
                  Login
                </Link>

                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full ring ring-[#ff9400] ring-offset-2 ring-offset-black">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a className="text-red-500">Logout</a></li>
              </ul> */}
              </div>

            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-3 pb-3">
            <div className="flex rounded-md overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Search TopCart"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-[#ff9400] px-4 flex items-center justify-center">
                <IoIosSearch size={22} className="text-black" />
              </button>
            </div>
          </div>
          

        </div>
        <ShopByCategory categories={categories}></ShopByCategory>
      </header>}
    </div>
  );
};

export default Navbar;


 