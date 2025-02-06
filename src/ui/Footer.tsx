import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 py-10 border-t border-t-borderColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          JungleSoft
        </h2>
        <p className="text-base text-darkText tracking-wide">
        We are experts in web design development and Deployment. We further specialise in
        the best Ecommerce platforms in the region.
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
              Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            198 Riverside Drive, Suite 11 Jyotin Court Westlands, Nairobi 002002
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            info@junglesoft.pro
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +254 716611029
          </p>
        </div>
      </div>
      
       {/* <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <p className="text-base text-darkText">
          Please contact us for more info. 
          info@junglesoft.pro
          
        </p>
      </div>  */}
    </div>
  );
};

export default Footer;
