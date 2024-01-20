import React from 'react'

import ShopNow from "../assets/portfolio/shopnow.png"
import MovieTime from "../assets/portfolio/movietime.png"
import TaskManager from "../assets/portfolio/taskmanager.png"
import Weather from "../assets/portfolio/weather.png"
import Pinterest from "../assets/portfolio/pinterest.png"

export function Portfolio() {
    const links = [
   {
    id: 1,
    src: ShopNow,
    demo: "https://shopnow-vijay.netlify.app/",
    code: "https://github.com/vijay-jawalkar/shopnow-updated-version"
   },
   {
    id: 2,
    src: Pinterest,
    demo: "#",
    code: "https://github.com/vijay-jawalkar/pinterest-clone"
   },
   {
    id: 3,
    src: MovieTime,
    demo: "https://movietime-vijay.netlify.app/",
    code: "https://github.com/vijay-jawalkar/movie-time-using-reactjs"
   },
   {
    id: 4,
    src: TaskManager,
    demo: "https://task-manager-vijay.netlify.app/",
    code: "https://github.com/vijay-jawalkar/aulacube-task-manager"
   },
   {
    id: 5,
    src: Weather,
    demo: "https://weatherinfoget.netlify.app/",
    code: "https://github.com/vijay-jawalkar/weather-app"
   }
    ]

  return (
    <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio </p>
                <p className='py-6'> Check out some of my work right here</p>
            </div>

           

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                links.map((link, index) => {
                    return (
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src = {link.src} alt="" className='rounded-md hover:scale-105 duration-300'/>
    
                        <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>
                            <a href= {link.demo} target='_blank' rel='noreferrer'>
                            Demo
                                </a>  </button>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'> 
                        <a href={link.code} target='_blank'  rel='noreferrer'>
                            Code
                                </a>  </button>
                    </div>
                    </div>
                    )
                })
            }
               
              
            </div>
        </div>
    </div>
  )
}

 