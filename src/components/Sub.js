import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Sub = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
      <div className=" w-full min-h-screen">
        <Home />
      </div>
      <div className="w-full min-h-screen">
        <About />
      </div>
      <div className="w-full min-h-screen">
        <Skills />
      </div>
      <div className="w-full min-h-screen">
        <Projects />
      </div>
      <Contacts />
    </div>
  );
};

export default Sub;
