import React from "react";
import Typewriter from "typewriter-effect";
import Avatar from "@mui/material/Avatar";
import image from "../assests/profile.jpg";
import image1 from "../assests/image1.png";
import Socials from "./Socials";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-color4 text-xl overflow-hidden sm:w-auto justify-normal items-start">
      <img
        src={image1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 sm:w-auto h-[50%] lg:w-auto lg:ml-60"
      />
      <div className="relative z-10 text-start p-5 w-full ml-5 sm:w-full md:w-full lg:w-full">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-3xl md:text-4xl lg:text-6xl">
          Maduranga Gunasekara
        </h1>
        <div className="typewriter  sm:text-2xl -mt-2 md:text-3xl lg:text-4xl mt-5">
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
        <div className="relative flex items-center justify-start md:mt-8 xl:mt-8 sm:-3">
          <div className="bg-white p-5 pl-16 rounded-lg shadow-lg flex items-center space-x-3 relative z-10">
            <Avatar
              alt="Maduranga"
              src={image}
              sx={{ width: 60, height: 60 }}
              className="absolute left-0 transform -translate-x-1/2 sm:w-[50%] h-50"
            />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
