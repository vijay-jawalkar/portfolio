import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

export function SocialLinks() {
  const links = [
   {
    id: 1,
    child: (
      <>
      Linkedin <FaLinkedin size={27}/>
      </>
    ),
    href: "https://www.linkedin.com/in/vijayjawalkar"
   },
   {
    id: 2,
    child: (
      <>
      Github <FaGithub size={27}/>
      </>
    ),
    href: "https://github.com/vijay-jawalkar",
    style: "rounded-tr-md",
   },
   {
    id: 3,
    child: (
      <>
      Mail <MdEmail size={27}/>
      </>
    ),
    href: "mailto:vijay.jawalkar.786@gmail.com"
   },
   {
    id: 4,
    child: (
      <>
      Resume <BsFillPersonLinesFill size={27}/>
      </>
    ),
    href: "/Vijay_Web_Developer.pdf",
    style: "rounded-br-md",
    download:true
   },
   
  ]


  return (
    <div className='hidden lg:flex flex-col  top-[35%] left-0 fixed'>

        <ul>

          {
         links.map((link, index) => {
          return (
            <li key = {index} className='flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
            <a 
            href={link.href} 
            className='flex justify-between items-center w-full text-white'
            download={link.download}
            target="_blank"
            rel="noreferrer" >
            {
              link.child
            }
            </a>
            
        </li>
          )
         })
          }


           
        </ul>
    </div>
  )
}

 