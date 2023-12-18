import React from "react";
import HeroImage from "../assets/photo.jpg";

import { IoIosArrowDroprightCircle } from "react-icons/io";

export function Home() {
  return (
    <div name = "home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl text-white font-bold">I'm a Front End Developer</h1>
          <p className="text-gray-500 py-4 max-w-md">
            I'm  front-end developer skilled in HTML, CSS,
            JavaScript, Bootstrap, Tailwind, ReactJs, React Hooks, Router, Redux
            and Firebase. I'm excited to
            apply my expertise and learn in a dynamic environment. Currently
            seeking frontend development opportunities to contribute to company
            growth and my own career journey.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300"> 
                <IoIosArrowDroprightCircle size={22}/>
                </span>
             
            </button>
          </div>
        </div>
        <div>
            <img src = {HeroImage} alt = "HeroImage" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
}
