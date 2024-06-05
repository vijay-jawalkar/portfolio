import React from "react";

export function Contact() {
  return (
    <div name = "contact"   style={{backgroundColor: 'rgb(18,15,22)'}} className="w-full md:h-screen  p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Contact </p>
          <p className='py-6'> Submit the form below to get touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/294cb3d4-c44a-4a2e-8b1e-6ddb4b7ed8f7" method="POST" className="flex flex-col w-full md:w-1/2 ">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

<input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
            name="message"
            placeholder="Enter Your Message"
            rows={10}
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">

            </textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
