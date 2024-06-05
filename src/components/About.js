import React from "react";

export function About() {
  return (
    <div
      name="about"
      style={{backgroundColor: 'rgb(18,15,22)'}}
      className="md:h-screen w-full   text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About Me{" "}
          </p>
        </div>

        <p className="mt-16 text-2xl font-extrabold text-zinc-200"> Vijay Jawalkar</p>
        <span className=" w-[160px] mb-8 my-2  px-2 py-1 text-sm bg-zinc-900 font-semibold text-emerald-500" >Full Stack Developer</span> 

        <p className="text-xl ">
        Hello! I'm a full-stack developer from Betul district, currently living and working in Bhopal as a MERN stack developer intern at Zappian. I have a passion for creating web applications that address real-world problems. My journey began with learning frontend technologies like ReactJS, and I later expanded my skills to include backend development like nodejs, express and mongodb.
        </p>

        <br />

        <p className="text-xl">
     
I am a quick learner with a constant curiosity for new technologies that can help solve problems. As a good team player, I strive to build strong relationships with everyone. In my free time, I enjoy watching movies and listening to audiobooks.
        </p>
      </div>
    </div>
  );
}
