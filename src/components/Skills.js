import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FaCode, FaTools, FaLightbulb } from "react-icons/fa";

function Skills() {
  return (
    <div className="p-10 h-full">
      <h1 className="text-4xl font-bold text-center text-color5 mb-8">
        Skills
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex items-center text-color3 mb-4 hover:text-color4">
            <IoSettingsOutline className="mr-2 text-xl " />
            <h2 className="text-2xl font-semibold hover:text-color">
              Development
            </h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> JavaScript
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> HTML5
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> CSS3
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> React
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Python
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Angular
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Flutter
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Dart
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> C / C++
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> DAX
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> R
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Node.js
            </li>

            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> Express.js
            </li>
            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> SQL,PostgreSQL
            </li>
            <li className="flex items-center text-color4">
              <FaCode className="mr-2" /> MongoDB, Firebase
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center text-color3 hover:text-color4 mb-4">
            <BsTools className="mr-2 text-xl" />
            <h2 className="text-2xl font-semibold">Tools</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Git & GitHub
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Command Line
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Chrome DevTools
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Postman
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Docker
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> AWS
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Terraform
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Kubernetes
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Jenkins
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Power BI
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> Google Data Studio
            </li>

            <li className="flex items-center text-color4">
              <FaTools className="mr-2" /> RStudio
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center text-color3 hover:text-color4 mb-4">
            <HiLightBulb className="mr-2 text-xl" />
            <h2 className="text-2xl font-semibold">Knowledge</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> ECMAScript 6
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Usability
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Responsive Design
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Agile Methodologies
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> CI/CD
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Test-Driven Development (TDD)
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Microservices Architecture
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> RESTful APIs
            </li>

            <li className="flex items-center text-color4">
              <FaLightbulb className="mr-2" /> Networking            {" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
