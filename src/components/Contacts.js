import React, { useState } from "react";
import env from "react-dotenv";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { MdAddLocationAlt, MdEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

const userId = env.EMAILJS_USER_ID;
const serviceId = env.EMAILJS_SERVICE_ID;
const templateId = env.EMAILJS_TEMPLATE_ID;

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        // console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
      }
    );

    setFormData({ name: "", email: "", subject: "", body: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-color5 mb-8">
        Get In Touch
      </h1>
      <h2 className="text-2xl text-color4 text-center mb-8">
        Have a sweet project in mind or just want to say hi?
        <br /> Feel free to send me a message!
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 max-w-lg">
          <form
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-color3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-color3"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-color3"
            />
            <textarea
              name="body"
              placeholder="Message"
              value={formData.body}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-color3"
              rows="5"
            ></textarea>
            <Button variant="outlined" className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 max-w-lg space-y-6 text-xl">
          <div className="flex items-start space-x-2">
            <MdAddLocationAlt className="text-color3 text-2xl mt-1" />
            <p className="text-color5">
              No 41, Kurunegala road,
              <br />
              Kuliyapitiya. 60200.
              <br />
              Kurunegala District,
              <br />
              North Western Province,
              <br />
              Sri Lanka.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMobileScreen className="text-color3 text-2xl" />
            <p className="text-color5">+94 76 620 6555</p>
          </div>
          <div className="flex items-start space-x-2">
            <MdEmail className="text-color3 text-2xl mt-1" />
            <div>
              <p className="text-color5">
                madurangalakbima@gmail.com
                <br />
              </p>
              <p className="text-color5">madurangapgunasekara@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
