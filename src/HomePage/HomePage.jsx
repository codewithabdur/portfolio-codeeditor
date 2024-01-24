import React, { useEffect, useState } from "react";
import {
  CodeInputPage,
  About,
  Services,
  Portfolio,
  Contact,
} from "../container";
import NavBar from "../Component/NavBar/NavBar";
import { bg, phonebg } from "../img";
import "./HomePage.css";
import client from "../lib/client";

const HomePage = () => {
  const [backgroundImage, setBackgroundImage] = useState(bg);
  const [post, setPost] = useState([]) 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setBackgroundImage(post[0]?.bg?.asset?.url || "");
      } else {
        setBackgroundImage(post[0]?.phonebg?.asset?.url || "");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [post]);

  useEffect(()=>{
    client
      .fetch(
        `
    *[_type == "homepage"]{
      username,
      bg{
        asset->{
          url
        },
      },
      phonebg{
        asset->{
          url
        },
      },
      developer,
      address,
    }
    `
      )
      .then((data) => {
        setPost(data)
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  return (
    <>
      <NavBar />
      {post[0] && (
        <div className=" overflow-x-hidden" id="header">
          <div
            className={`h-screen w-full flex items-center  mx-7 md:mx-0 bg-cover `}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="header-text  w-[80%] mx-auto">
              <p className="text-lg">{post[0].developer}</p>
              <h1 className="text-3xl md:text-5xl my-8 lineHeight">
                Hi! I'm{" "}
                <span className="text-green-500">{post[0].username}</span>{" "}
                <br />
                from {post[0].address}
              </h1>
            </div>
          </div>
        </div>
      )}
      <span id="about">
        <About />
      </span>
      <span id="service">
        <Services />
      </span>
      <span id="portfolio">
        <Portfolio />
      </span>
      <span>
        <CodeInputPage />
      </span>
      <span id="contact">
        <Contact />
      </span>
    </>
  );
};

export default HomePage;
