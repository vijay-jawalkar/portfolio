import React from 'react'
import ReactWether from "../assets/portfolio/reactWeather.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"

export function Portfolio() {
    const links = [
   {
    id: 1,
    src: ReactWether
   },
   {
    id: 2,
    src: installNode
   },
   {
    id: 3,
    src: navbar
   }
    ]

  return (
    <div name='portfolio' className='w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio </p>
                <p className='py-6'> Check out some of my work right here</p>
            </div>

           

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                links.map((link, index) => {
                    return (
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src = {ReactWether} alt="" className='rounded-md hover:scale-105 duration-300'/>
    
                        <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'> Demo </button>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'> Code </button>
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

 