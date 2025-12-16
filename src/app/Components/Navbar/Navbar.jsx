import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi"; 
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-[#000000]  p-3">
            <div className="navbar container mx-auto gap-5 ">
                <div className="">
                   <Link href={'/'}> <Image src={'/topcart-logo.png'} width={80} height={30} alt="nav logo"></Image></Link>
                </div>
                <div className="flex  flex-1  gap-2">
                    <div className="flex-1 flex gap-5  items-center ">
                        <label className="input w-full hidden lg:flex ">
                            <input type="text" placeholder="Search TopCart" className="input  input-bordered" />
                            <div className="bg-amber-500  p-1 cursor-pointer"><IoIosSearch size={22} /></div>

                        </label>
                        <div>
                            <div className="  flex justify-center">
                                <FaHeart className=" " style={{ color: 'white', fontSize: '24px' }} />
                            </div>
                            <p className="text-white font-bold">WISHLIST</p>
                        </div>
                        <div className="" >
                            <div className="relative flex justify-center">
                                <GiShoppingBag  className="" color="white" size={22} />
                                <span className="absolute bottom-1 left-6 font-bold bg-[#ff9400] text-white rounded-full px-2">0</span>
                            </div>
                            <p className="text-white font-bold ">CART</p>
                        </div>
                        <div className="dropdown  dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 z-10 rounded-box   mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;