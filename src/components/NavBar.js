import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export function NavBar() {
const [nav, setNav] = useState(false)

    let links = [
  {
    id:1,
    link: "Home"
  },
  {
    id:2,
    link: "About"
  },
  {
    id:3,
    link: "Portfolio"
  },
  {
    id:4,
    link: "Experience"
  },
  {
    id:5,
    link: "Contact"
  }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed' >

   <div>
    <h1 className='text-5xl font-signature ml-2'> Vijay </h1> 
   </div>

   <ul className='hidden md:flex'>
    {
        links.map((val, index) => {
            return (
                <li key = {index} className='px-4 font-medium cursor-pointer text-gray-500  hover:scale-105 duration-200 '>{val.link}</li>
            )
        })
    }
  
   </ul>

   <div
   onClick={() => setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden'>
     
   {
    nav ? <FaTimes size={30}/> : <FaBars size={30}/>
   }
   </div>

   {
    nav && (
        <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-600'>
        {
             links.map((val, index) => {
                 return (
                     <li key = {index} className='py-4 cursor-pointer text-4xl text-gray-500  '>{val.link}</li>
                 )
             })
         }
       
        </ul>
    )
   }

  
    </div>
  )
}

