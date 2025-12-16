import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-[#fef3e1] p-2">
                <ul className="flex text-2xl px-5  font-bold justify-evenly">
                    <li>Free Delivery</li>
                    |
                    <li>Satisfaction Promised </li>
                    |
                    <li>Excellent Support</li>
                    |
                    <li>Secure Payment</li> 
                </ul>
            </div>
            <div className="flex p-8 bg-[#f4f5f8]  gap-20 justify-evenly" > 

                <div className="space-y-4">
                    <div className="flex justify-center">
                        <TbTruckDelivery className=" " size={50} />  
                    </div>
                    <div  className="space-y-2" >
                            <h2 className="text-xl font-semibold text-center">Free UK Delivery</h2>
                            <p className="text- text-center">We provide free BD Delivery within 6-10 business day.</p>
                    </div>
                </div>
                <div  className="space-y-4">


                    <div className="flex justify-center">
                        <MdOutlineWifiCalling3  size={50} />  
                    </div>
                    <div className="space-y-2" >
                            <h2 className="text-xl font-semibold text-center">Contact Us</h2>
                            <p className="text-">support@ourfriday.co.uk</p>
                    </div>
                </div>


                <div  className="space-y-4">
                    <div className="flex justify-center">
                        <FiRefreshCcw  size={50} />  
                    </div>
                    <div  className="space-y-2" >
                            <h2 className="text-xl font-semibold text-center">Worry Free Return Policy</h2>
                            <p className="text- text-center" >We provide 14 days worry-free return policy. T&Cs apply.</p>
                    </div>
                </div>


                <div  className="space-y-4">
                    <div className="flex justify-center">
                        <TbTruckDelivery size={50} />  
                    </div>
                    <div className="space-y-2" >
                            <h2 className="text-xl font-semibold text-center">Secure checkout</h2>
                            <p className="text- text-center">All the payment processes are secure.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default WhyChooseUs;