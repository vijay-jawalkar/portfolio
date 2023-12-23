import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'

export function NavBar() {
const [nav, setNav] = useState(false)

    let links = [
  {
    id:1,
    link: "home"
  },
  {
    id:2,
    link: "about"
  },
  {
    id:3,
    link: "portfolio"
  },
  {
    id:4,
    link: "skills"
  },
  {
    id:5,
    link: "contact"
  }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed' >

   <div>
    <h1 className='text-5xl font-signature ml-2'> Vijay </h1> 
   </div>

   <ul className='hidden md:flex'>
    {
        links.map(({id, link}) => {
            return (
                <li key = {id} className='px-4 font-medium cursor-pointer text-gray-500  hover:scale-105 duration-200 '>
                 
                  <Link to={link} smooth duration={500}>
                  {link}
                  </Link>
                  </li>
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
             links.map(({id, link}) => {
                 return (
                     <li key = {id} className='py-4 cursor-pointer text-4xl text-gray-500  '>
                     
                      <Link  onClick={() => setNav(!nav)} to = {link} smooth duration={500}> 
                      {link}
                      </Link>
                      </li>
                 )
             })
         }
       
        </ul>
    )
   }

  
    </div>
  )
}

