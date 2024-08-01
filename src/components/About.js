import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center h-screen bg-gray-10 text-color4 m-5 bg-color2">
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      <div className="border border-solid border-color4 rounded-lg  shadow-md p-6">
        <p className="tracking-wide leading-6 text-justify mb-4">
          My name is Maduranga Gunasekara, and I am a passionate Full Stack
          Developer from Sri Lanka. I have a strong expertise in mobile and web
          development, particularly using Flutter, React, and Angular. Recently,
          I have been focusing on the DevOps side, learning about Docker,
          Kubernetes (K8s), Jenkins, AWS, and other DevOps-related technologies
          to enhance my skill set and streamline the development process.
        </p>
        <p className="mb-4 text-justify">
          I hold a BSc (Hons) in Engineering in Information and Communication
          Engineering from SLTC Research University, where I graduated with a
          Second Class Lower Division and a GPA of 3.04/4.0. My final year
          project, the Bakery Product Recognition System (BPRS), showcases my
          passion for edge computing and machine learning. BPRS is a bakery
          product identification system that combines both object recognition
          and self-learning algorithms using C language. This project runs on a
          small ESP32, demonstrating efficient object detection and recognition
          capabilities.
        </p>
        <p className="mb-4 text-justify">
          With my international experience and current focus on DevOps, I am
          eager to contribute to cutting-edge software development projects,
          leveraging my technical skills to create real-world solutions that
          make a difference.
        </p>

        <a
          href="/Maduranga_Gunasekara.pdf"
          className="bg-color3 text-white px-4 py-2 rounded-md shadow-lg hover:bg-color4"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
