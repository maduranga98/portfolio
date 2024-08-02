import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

function Socials() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg flex items-center space-x-3 bg-color5 sm:space-x-2 md:space-x-3 lg:space-x-4">
      <a href="https://www.linkedin.com/in/maduranga-gunasekara-3768361b5/">
        <FaLinkedin className=" text-2xl text-color2 hover:text-color3 sm:text-lg " />
      </a>
      <a href="https://github.com/maduranga98">
        <FaGithubSquare className="text-color2 hover:text-color3 text-2xl sm:text-lg" />
      </a>
      <a href="https://www.instagram.com/mpg_0098?igsh=bXBuczlrNTRmbDR2">
        <FaInstagramSquare className="text-color2 hover:text-color3 text-2xl sm:text-lg" />
      </a>
      <a href="https://www.facebook.com/maduranga.gunasekara.9?mibextid=ZbWKwL">
        <FaFacebookSquare className="text-color2 hover:text-color3 text-2xl sm:text-lg" />
      </a>
      <a href="http://www.youtube.com/@BeyondtheUnknown-ov9gs">
        <FaSquareYoutube className="text-color2 hover:text-color3 text-2xl sm:text-lg" />
      </a>
    </div>
  );
}

export default Socials;
