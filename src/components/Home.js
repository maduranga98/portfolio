import React from "react";
import Typewriter from "typewriter-effect";
import Avatar from "@mui/material/Avatar";
import image from "../assests/profile.jpg";
import image1 from "../assests/image1.png";
import Socials from "./Socials";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-color4 text-xl overflow-hidden">
      <img
        src={image1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 lg:w-auto lg:right-0 lg:left-auto lg:ml-60"
      />
      <div className="relative z-10 text-start p-5 w-full max-w-4xl lg:-ml-80 mt-80">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-slate-200">
          Maduranga Gunasekara
        </h1>
        <div className="typewriter text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 md:mt-5">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Full Stack Developer | Flutter Developer | Data Analyst"
                )
                .start();
            }}
          />
        </div>
        <div
          className="mt-4 md:mt-8"
          data-aos="flip-up"
          data-aos-duration="3000"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 inline-flex">
            <Avatar
              alt="Maduranga"
              src={image}
              sx={{ width: 40, height: 40 }}
              className="mr-2"
            />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
