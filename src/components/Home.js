import React from "react";
import HeroImage from "../assets/photo.jpg";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-scroll";

export function Home() {
  return (
    <div name = "home" className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          I excel in front-end development and am presently employed as a software developer intern at LeopardRuns Innovation and Technology. My expertise lies in various front-end technologies like ReactJS, Redux, JavaScript, and Tailwind CSS. I'm known for my quick learning abilities in mastering new skills.
          </p>

          <div>
            <Link to = "portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300"> 
                <IoIosArrowDroprightCircle size={22}/>
                </span>
             
            </Link>
          </div>
        </div>
        <div>
            <img src = {HeroImage} alt = "HeroImage" className=" rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
}
