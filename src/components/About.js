import React from "react";

export function About() {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About{" "}
          </p>
        </div>

        <p className="text-xl mt-20">
         


I love making cool things online! I'm really into front-end development and know a bunch of technologies like ReactJS, Redux, JavaScript, Tailwind CSS, HTML and CSS. One of my proudest projects is 'ShopNow,' where I created an online shop from scratch. While I focus mostly on the front-end, I'm also exploring back-end stuff like Node.js, Express.js, and MongoDB to become a full-stack developer.
        </p>

        <br />

        <p className="text-xl">
        I'm good at learning new things fast and solving problems. I enjoy figuring out issues by myself using online resources. My big goal is to be great at both front and back-end development. I want to keep improving and make awesome digital solutions that blend both sides of creating websites!
        </p>
      </div>
    </div>
  );
}
