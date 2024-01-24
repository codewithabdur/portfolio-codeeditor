import React, { useState } from "react";
import "./Contact.css"
import { FaMobileAlt, FaRegPaperPlane } from "react-icons/fa";


const Contact = () => {
    const firebaseUrl = "https://imaginary-realms-default-rtdb.firebaseio.com";
  const [userData,setUserData] = useState({
    name: "",
    email: "",
    message: "",

  })

   const handleChange = (e) => {
     const { name, value } = e.target;
     setUserData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSubmit = (e) =>{
     e.preventDefault();
    console.log(userData);
   }
    const zipFilePath = require("../Responsive.zip");
  return (
    <>
      <div id="contact" className="md:pt-0 pt-16 w-[80%] mx-auto">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="contact-left flex-basis-35">
              <h1 className="sub-title text-white">Contact Me</h1>
              <p>
                <FaRegPaperPlane className="fas fa-paper-plane text-[#00f8ae]  " />
                codewithabdur.react@gmail.com
              </p>
              <p>
                <FaMobileAlt className="fas fa-mobile-screen-button text-[#00f8ae] " />
                0123456789
              </p>
              <div className="social-icons mt-8">
                <a
                  href="https://www.facebook.com/people/Saqib-Khan/100064823755797/"
                  target="_blank"
                  className="text-ababab text-3xl mr-3 hover:text-[#00f8ae] transition-transform transform hover:translate-y-[-5px] filter drop-shadow-md"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/CodeWithAbdur"
                  target="_blank"
                  className="text-ababab text-3xl mr-3 hover:text-[#00f8ae] transition-transform transform hover:translate-y-[-5px] filter drop-shadow-md"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/codewithabdur"
                  target="_blank"
                  className="text-ababab text-3xl mr-3 hover:text-[#00f8ae] transition-transform transform hover:translate-y-[-5px] filter drop-shadow-md"
                >
                  <i className="fab fa-square-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@codewithabdur"
                  target="_blank"
                  className="text-ababab text-3xl hover:text-[#00f8ae] transition-transform transform hover:translate-y-[-5px] filter drop-shadow-md"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <a
                href={zipFilePath}
                download
                className=" btn2 inline-block bg-[#00f8ae]"
              >
                Download ZipFile
              </a>
            </div>
            <div className="contact-right flex-basis-60">
              <form id="my-form" onSubmit={handleSubmit} className="w-full">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Write Your Name"
                  autoComplete="off"
                  required
                  className="w-full bg-gray-700 p-4 mb-4 rounded text-[#00ffcb]"
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Write Your Email"
                  autoComplete="off"
                  required
                  className="w-full bg-gray-700 p-4 mb-4 text-[#00ffcb] rounded"
                />
                <textarea
                  name="message"
                  rows="6"
                  value={userData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-gray-700 p-4 mb-4 text-[#00ffcb] rounded"
                ></textarea>

                <button
                  type="submit"
                  className=" btn2 bg-[#00f8ae] py-4 px-6 text-white text-xl mt-4 cursor-pointer"
                >
                  Submit
                </button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright w-full text-center py-5 ">
        <p className="text-white font-light">
          <i className="fas fa-copyright text-[#00f8ae] mr-2"></i>&copy;
          Copyright Reserved with @CodeWithAbdur.
        </p>
      </div>
    </>
  );
};

export default Contact;
