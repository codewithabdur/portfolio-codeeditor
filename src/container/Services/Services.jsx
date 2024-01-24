import React from "react";
import "./Service.css"
import { FaAppStore, FaCode, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="py-16 w-[80%] mx-auto">
      <div className="container ">
        <h1 className="sub-title text-white text-center text-[30px] font-bold font-serif">My Services</h1>
        <div className="grid services-list grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          <div className="service-item bg-gray-700 p-8 rounded-lg transition-transform hover:bg-[#00f8ae] transform hover:translate-y-[-10px]">
            <FaLaptopCode className=" text-5xl mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-sm font-light mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nesciunt veniam repellat sapiente.
            </p>
            <a
              href="https://codewithabdur.netlify.app"
              rel="noreferrer noopener"
              target="_blank"
              className="text-white text-xs inline-block"
            >
              Learn More
            </a>
          </div>
          <div className="service-item bg-gray-700 p-8 rounded-lg transition-transform hover:bg-[#00f8ae] transform hover:translate-y-[-10px]">
            <FaCode className=" text-5xl mb-6" />
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-sm font-light mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nesciunt veniam repellat sapiente.
            </p>
            <a
              href="https://codewithabdur.netlify.app"
              rel="noreferrer noopener"
              target="_blank"
              className="text-white text-xs inline-block"
            >
              Learn More
            </a>
          </div>
          <div className="service-item bg-gray-700 p-8 rounded-lg transition-transform hover:bg-[#00f8ae] transform hover:translate-y-[-10px]">
            <FaAppStore className=" text-5xl mb-6" />
            <h2 className="text-2xl font-semibold mb-4">App Design</h2>
            <p className="text-sm font-light mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nesciunt veniam repellat sapiente.
            </p>
            <a
              href="https://codewithabdur.netlify.app"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white text-xs inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
