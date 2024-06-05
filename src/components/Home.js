import React, { useState, useEffect } from "react";
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import nodejs from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
// import html from "../assets/html.png"


import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-scroll";

const stickers = [
  react, javascript, nodejs, tailwind
]

const radius = 200; // Radius of the circular path around the image
const centerX = 150; // Center X position of the circle
const centerY = 150; // Center Y position of the circle

export function Home() {
  const [sentences, setSentences] = useState(["Frontend Development", "Backend Development"]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  console.log(setSentences)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Change sentence every 5 seconds

    return () => clearInterval(interval);
  }, [sentences]);
  return (
    <div name = "home" style={{backgroundColor: 'rgb(18,15,22)'}} className="md:h-screen w-full mt-20 md:mt-0">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-between gap-4 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="pb-6" > <span className="move  text-2xl">👋</span> <span className="text-zinc-100 text-2xl font-semibold pb-6"> Hey </span></p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white">I'm Vijay Jawalkar</h2>
          
          <p className="py-6 font-semibold flex flex-row gap-2">
      <p className="text-zinc-100 text-xl  md:text-2xl "> I am into </p>
      <p className={`animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-lg md:text-2xl text-green-300 font-bold ${currentSentenceIndex === 1 ? 'hidden' : ''}`}>
        {sentences[0]}
      </p>
      <p className={`animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-lg md:text-2xl text-green-300  font-bold ${currentSentenceIndex === 0 ? 'hidden' : ''}`}>
        {sentences[1]}
      </p>
    </p>
          <p className="text-cyan-50 py-2 max-w-md">
          Full-Stack Developer with a passion for building dynamic web applications using the MERN stack. Bringing a strong foundation and a knack for quickly grasping new technologies to every project.
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
        <div className="relative flex items-center justify-center">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQH4q2CcK7DJng/profile-displayphoto-shrink_800_800/0/1705604918722?e=1723075200&v=beta&t=29JoZFm-C5_7vtJdI8gZKlbfTM9pdE2gYhfc-zsKG3Q"
        alt="HeroImage"
        className="object-cover w-[150px] lg:w-[300px] rounded-full mx-auto"
      />

      {stickers.map((sticker, index) => {
        const angle = (index / stickers.length) * (1.6 * Math.PI); // Calculate the angle for each sticker
        const x = centerX + radius * Math.cos(angle) - 30; // 32 is half the width of the sticker (adjust as needed)
        const y = centerY + radius * Math.sin(angle) - 20; // 32 is half the height of the sticker (adjust as needed)
        return (
          <img
            key={index}
            src={sticker}
            alt={`Sticker ${index}`}
            className="hidden lg:block sticker absolute w-10 h-10 rounded-full object-cover opacity-75"
            style={{ left: `${x}px`, top: `${y}px` }}
          />
        );
      })}
    </div>
      </div>
    </div>
  );
}
