import React from 'react'
import htmlImage from "../assets/html.png"
import cssImage from "../assets/css.png"
import javascriptImage from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import tailwindImage from "../assets/tailwind.png"
// import nodeImage from "../assets/node.png"
import githubImage from "../assets/github.png";
// import expressImage from "../assets/expressjs.png"
// import mongodbImage from "../assets/mongoDB.png"

export function Skill() {


    const links = [
        {
            id: 1,
            logo: htmlImage,
            name:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            logo: cssImage,
            name:"CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            logo: javascriptImage,
            name:"Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            logo: reactImage,
            name:"React",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            logo: tailwindImage,
            name:"Tailwind CSS",
            style: "shadow-sky-500"
        },
        // {
        //     id: 6,
        //     logo: nodeImage,
        //     name:"NodeJs",
        //     style: "shadow-green-500"
        // },
        // {
        //     id: 7,
        //     logo: expressImage,
        //     name:"Express",
        //     style: "shadow-gray-500"
        // },
        // {
        //     id: 8,
        //     logo: mongodbImage,
        //     name:"MongoDB",
        //     style: "shadow-green-500"
        // },
        
        {
            id: 9,
            logo: githubImage,
            name:"Github",
            style: "shadow-gray-500"
        }
    ]
  return (
    <div name = "skills" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                <p  className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div  className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
                {
                    links.map((link, index) => {
                        return (
                            <div key = {index} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${link.style}` } >
                            <img src = {link.logo} alt = "HTML"  className='w-20 mx-auto'/>
                            <p className='mt-4'>{link.name}</p>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>
    </div>
  )
}

 