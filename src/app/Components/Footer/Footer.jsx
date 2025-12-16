"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaGooglePay } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
                    <div>
                        <h4 className="font-semibold mb-4">Get support</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Live chat</Link></li>
                            <li><Link href="#">Check order status</Link></li>
                            <li><Link href="#">Refunds</Link></li>
                            <li><Link href="#">Report abuse</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Payments & protections</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Safe and easy payments</li>
                            <li>Money-back policy</li>
                            <li>On-time shipping</li>
                            <li>After-sales protections</li>
                            <li>Product monitoring services</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Source on TopCart</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Request for Quotation</li>
                            <li>Membership program</li>
                            <li>Sales tax and VAT</li>
                            <li>TopCart Reads</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Sell on TopCart</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Start selling</li>
                            <li>Seller Central</li>
                            <li>Become a Verified Seller</li>
                            <li>Partnerships</li>
                            <li>Download seller app</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Get to know us</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>About TopCart</li>
                            <li>Corporate responsibility</li>
                            <li>News center</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>

                {/* Payments */}
                <div className="mt-12 flex flex-wrap gap-4 items-center">
                    <FaCcVisa className="text-blue-700" size={50} /> 
                    <FaCcMastercard className="text-orange-500" size={50} />
                    <FaCcPaypal size={50} />
                    <FaGooglePay className="text-red-500" size={50} />




                </div>

                {/* App Download */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-600">
                        Trade on the go with the <span className="font-semibold">TopCart app</span>
                    </p>
                    {/* <div className="flex gap-4">
                        <Image src="/appstore.png" alt="App Store" width={140} height={45} />
                        <Image src="/playstore.png" alt="Play Store" width={140} height={45} />
                    </div> */}
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t py-6 text-center text-xs text-gray-500">
                <p>© 1999–2025 TopCart.com. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                    <Link href="#">Policies</Link>
                    <Link href="#">Legal Notice</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}
