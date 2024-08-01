import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Sub = () => {
  return (
    <div className="min-h-screen w-full  flex flex-col gap-4 overflow-hidden hide-scrollbar">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Sub;
