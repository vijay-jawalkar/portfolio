import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
import { FaNodeJs } from "react-icons/fa";

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
    link: "projects"
  },
  // {
  //   id:4,
  //   link: "skills"
  // },
  {
    id:4,
    link: "experience"
  },
  {
    id:5,
    link: "contact"
  }
    ]

  return (
    <div style={{ backgroundColor: 'rgb(18,15,22)' }} className='flex justify-between items-center lg:px-24 w-full h-20 text-zinc-100 px-4 fixed z-50 top-0'>
    <p className='text-3xl'>
        <FaNodeJs />
    </p>

    <ul className='hidden md:flex'>
        {
            links.map(({ id, link }) => {
                return (
                    <li key={id} className='px-4 font-medium cursor-pointer text-white hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500} className='capitalize'>
                            {link}
                        </Link>
                    </li>
                )
            })
        }
    </ul>

    <div onClick={() => setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
        <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-600'>
            {
                links.map(({ id, link }) => {
                    return (
                        <li key={id} className='py-4 cursor-pointer text-4xl text-gray-500'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )}
</div>

  )
}

