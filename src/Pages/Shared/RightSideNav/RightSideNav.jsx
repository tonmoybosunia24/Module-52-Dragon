import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Swimming from "../../../assets/swimming.png"
import Class from "../../../assets/class.png"
import Playground from "../../../assets/playground.png"


const RightSideNav = () => {
       return (
              <div>
                     <div className="space-y-2 mb-3">
                            <h2 className="text-3xl font-medium">Login With</h2>
                            <button className="btn bg-white border-2 border-blue-300 w-full rounded-none text-blue-400">
                                   <IoLogoGoogle className="text-2xl" />
                                   Login With Google
                            </button>
                            <button className="btn bg-white border-2 w-full rounded-none">
                                   <FaGithub className="text-2xl" />
                                   Login With Github
                            </button>
                     </div>

                     <div className="space-y-2 mb-3">
                            <h2 className="text-3xl font-medium">Find Us On</h2>
                            <div className="border-2 rounded-md">
                                   <a className="flex items-center gap-2 text-xl border-b py-2 px-3" href=""> <div className="bg-gray-200 p-2 rounded-full"><FaFacebookF className=" text-blue-500" /></div> Facebook</a>
                                   <a className="flex items-center gap-2 text-xl border-b py-2 px-3" href=""> <div className="bg-gray-200 p-2 rounded-full"><FaTwitter className=" text-blue-500" /></div> Twitter</a>
                                   <a className="flex items-center gap-2 text-xl border-b py-2 px-3" href=""> <div className="bg-gray-200 p-2 rounded-full"><IoLogoInstagram className=" text-orange-400" /></div> Instagram</a>
                            </div>
                     </div>

                     <div className="bg-[#F3F3F3] px-2 py-3">
                            <h2 className="text-3xl font-medium">Q-Zone</h2>
                            <div className="space-y-2">
                                   <img src={Swimming} alt="" />
                                   <img src={Class} alt="" />
                                   <img src={Playground} alt="" />
                            </div>
                     </div>

              </div>
       );
};

export default RightSideNav;