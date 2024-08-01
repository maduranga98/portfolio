import React from "react";
import image3 from "../assests/image3.png";
import d1 from "../assests/d1.jpg";
import d2 from "../assests/d2.jpg";
import d3 from "../assests/d3.jpg";
import dicon from "../assests/deviceoicon.png";
import h1 from "../assests/h1.jpeg";
import h2 from "../assests/h2.jpeg";
import h3 from "../assests/h3.jpeg";
import iportal from "../assests/iportal.png";
import sample1 from "../assests/sample1.jpg";
import sample2 from "../assests/sample2.jpg";

function Projects() {
  return (
    <div className="text-color4 min-h-screen w-full">
      <h1 className="text-4xl font-bold text-center text-color5 mb-8 pt-5">
        Projects
      </h1>

      {/* BPRS Project */}
      <div className="mb-10 p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex justify-center">
          <img
            src={image3}
            alt="BPRSImage"
            className="w-full max-w-lg rounded-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          Bakery Product Recognition System (BPRS)
        </h2>
        <p className="text-center p-5">
          BPRS addresses the challenge of automating customer billing in
          bakeries by providing a lightweight, cost-effective solution. Unlike
          traditional systems that rely on barcodes or QR codes, BPRS uses an
          enhanced food recognition algorithm and a self-learning model running
          on a compact ESP32 device. This system efficiently identifies bakery
          products such as breads, buns, and rolls, generating accurate bills
          with minimal setup. It simplifies the billing process, making it ideal
          for smaller to mid-scale establishments, and enhances efficiency
          during peak times.
        </p>
      </div>

      {/* Aswenna Project */}
      <div className="mb-10 p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex flex-wrap justify-center">
          <img
            src={h2}
            alt="h2"
            className="w-full md:w-1/3 max-w-xs rounded-md mb-4"
          />
          <img
            src={h1}
            alt="h1"
            className="w-full md:w-1/3 max-w-xs rounded-md mb-4"
          />
          <img
            src={h3}
            alt="h3"
            className="w-full md:w-1/3 max-w-xs rounded-md mb-4"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          Aswenna (The Harvest) Mobile App
        </h2>
        <p className="text-center p-5">
          A mobile application developed using the Flutter framework to address
          a real-world problem faced by Sri Lankan farmers. Currently, Sri
          Lankan farmers struggle financially due to intermediary brokers
          between farmers and buyers. These brokers purchase produce at low
          prices from farmers and sell at higher prices to retailers, reducing
          farmers' profits. This app provides a solution to this issue by
          connecting farmers and retailers.
        </p>
      </div>

      {/* DEVICEO Project */}
      <div className="mb-10 p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex flex-wrap justify-center">
          <img
            src={dicon}
            alt="dicon"
            className="w-full md:w-1/4 max-w-xs rounded-md mb-4"
          />
          <img
            src={d1}
            alt="d1"
            className="w-full md:w-1/4 max-w-xs rounded-md mb-4"
          />
          <img
            src={d2}
            alt="d2"
            className="w-full md:w-1/4 max-w-xs rounded-md mb-4"
          />
          <img
            src={d3}
            alt="d3"
            className="w-full md:w-1/4 max-w-xs rounded-md mb-4"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">DEVICEO</h2>
        <p className="text-center p-5">
          A Mobile Application developed by using Flutter to view device
          information from one place. This is published in Huawei App Store.
        </p>
      </div>

      {/* Flow Talks Project */}
      <div className="mb-10 p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex flex-wrap justify-center">
          <img
            src={sample1}
            alt="sample1"
            className="w-full md:w-1/2 max-w-xs rounded-md mb-4"
          />
          <img
            src={sample2}
            alt="sample2"
            className="w-full md:w-1/2 max-w-xs rounded-md mb-4"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">Flow Talks</h2>
        <p className="text-center p-5">
          A mobile application developed using Flutter that provides anonymous
          support to individuals experiencing mental health challenges. The app
          offers professional counseling while utilizing advanced encryption and
          anonymization techniques to ensure user privacy and confidentiality.
          This app received the best innovative idea award in a mobile app
          development competition.
        </p>
      </div>

      {/* Web Portal Project */}
      <div className="mb-10 p-4 bg-white shadow-md rounded-lg space-y-4">
        <div className="flex justify-center">
          <img
            src={iportal}
            alt="iportal"
            className="w-full max-w-lg rounded-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">Web Portal</h2>
        <p className="text-center p-5">
          This web portal, designed using Angular, enables users to view company
          clients and their details efficiently. It is built to handle a large
          volume of data, ensuring smooth performance and scalability.
        </p>
      </div>
    </div>
  );
}

export default Projects;
