import React from 'react'

import ShopNow from "../assets/portfolio/shopnow.png"
// import MovieTime from "../assets/portfolio/movietime.png"
import TaskManager from "../assets/portfolio/taskmanager.png"
import Weather from "../assets/portfolio/weather.png"
import PicVista from "../assets/portfolio/picvista.png"
import ChatNinja from "../assets/portfolio/chatninja.png"
import Dashboard from "../assets/portfolio/dashboard.png"

export function Portfolio() {
    const links = [
   {
    id: 1,
    title: "ShopNow | E-Commerce",
    src: ShopNow,
    skills: "ReactJs, Redux, Tailwind, Node, Express",
    demo: "https://shopnow-vijay.netlify.app/",
    code: "https://github.com/vijay-jawalkar/shopnow-updated-version"
   },
   {
    id: 2,
    title: "ChatNinja | AI Plateform",
    src: ChatNinja,
    skills: "ReactJs, Node, Express, MongoDB",
    demo: "https://chatninja1.netlify.app/",
    code: "https://github.com/vijay-jawalkar/chat-ninja"
   },
   {
    id: 3,
    title: "Task Manager",
    src: TaskManager,
    skills: "ReactJs, Tailwind ",
    demo: "https://task-manager-vijay.netlify.app/",
    code: "https://github.com/vijay-jawalkar/aulacube-task-manager"
   },
   {
    id: 4,
    title: "Dashboard",
    src: Dashboard,
    skills: "ReactJs, Tailwind",
    demo: "https://master--bi-test-task-react.netlify.app/",
    code: "https://github.com/vijay-jawalkar/Bl-Test-Task-React"
   },
   {
    id: 5,
    title: "PicVista",
    src: PicVista,
    skills: "ReactJs, Node, Express, MongoDB",
    demo: "#",
    code: "https://github.com/vijay-jawalkar/picvista"
   },
//    {
//     id: 6,
//     title: "Movietime",
//     src: MovieTime,
//     demo: "#",
//     code: "https://github.com/vijay-jawalkar/movie-time-using-reactjs"
//    },
 
   {
    id: 7,
    title: "Weather Plateform",
    src: Weather,
    skills: "ReactJs, Tailwind, Weather API",
    demo: "https://weatherinfoget.netlify.app/",
    code: "https://github.com/vijay-jawalkar/weather-app"
   }
    ]

  return (
    <div name='projects' style={{backgroundColor: 'rgb(18,15,22)', minHeight: '100vh'}} className="w-full pb-28 text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Projects </p>
            <p className='py-6'> Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                links.map((link, index) => (
                    <div key={index} className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='text-sm font-semibold text-center py-2 text-zinc-400'> {link.title} </div>
                        <img src={link.src} alt="" className='rounded-md hover:scale-105 duration-300'/>
                        <div className='flex justify-center items-center'>
                            <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>
                                <a href={link.demo} target='_blank' rel='noreferrer'>Demo</a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'> 
                                <a href={link.code} target='_blank' rel='noreferrer'>Code</a>
                            </button>
                        </div>
                        <hr className='text-zinc-300'/>
                        <div className='py-2 px-3 text-sm text-center text-zinc-200'> {link.skills} </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>

  )
}

 