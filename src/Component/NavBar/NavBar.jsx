import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import client from "../../lib/client"
import  "./NavBar.css"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [post, setPost] = useState([])
  const [links, setLinks] = useState([])
  const [ulClassName, setUlClassName] = useState("right-[-200px]");
  const [ulListClassName, setUlListClassName] = useState("flex");
  const [bg, setBg] = useState("bg-transparent")
  function toogleUl() {
    setUlClassName((prevClassName) =>
      prevClassName === "right-[-200px]"
        ? "right-[0]"
        : "right-[-200px]"
    );
    setUlListClassName((prevClassName) =>
      prevClassName === "flex" ? "flex flex-col" : "flex"
    );
    setBg((prevClassName) =>
      prevClassName === "bg-transparent" ? "bg-[#00f8ae]" : "bg-transparent"
    );
    
  }

  const toogleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 100);
    toogleUl();
          
  };


  useEffect(()=>{
    client
      .fetch(
        `
      *[_type == "navplaylist"]{
        playlistname,
        url,
      }
      
      `
      )
      .then((data) => {
        setLinks(data);
        console.clear()
      })
      .catch((err) => {
        console.log(err);
      });
  },[])


  useEffect(()=>{
    client
      .fetch(
        `
      *[_type == "navbar"]{
        username,
        logolink,
        logo{
          asset->{
            url
          },
        },
      }
      
      `
      )
      .then((data) => {
        setPost(data);
        console.clear()
      })
      .catch((err) => {
        console.log(err);
      });
  },[])


  return (
    <>
      <div className="w-[90%] mx-auto  fixed top-4 z-10 left-4">
        <div className="">
          <nav className="flex   items-center justify-around flex-wrap">
            {post[0] && post[0]?.logo?.asset?.url && (
              <a href={post[0].logolink} target="_blank">
                <img
                  src={post[0].logo.asset.url}
                  alt="logo"
                  className="logo w-16"
                />
              </a>
            )}
            <div className="icon text-white  z-20" onClick={toogleMenu}>
              {isMenuOpen ? (
                <FaTimes className="transition-all ease-in-out duration-1000 " />
              ) : (
                <GiHamburgerMenu className="transition-all ease-in-out duration-1000 " />
              )}
            </div>
            <ul
              id="sidemenu"
              className={`   bg-[#00f8ae]  ${bg} transition-all ${ulListClassName} ease-in-out duration-300 ${
                isMenuOpen ? "right-0" : "right-[-200px]"
              } `}
            >
              <li>
                <a href="#header" rel="noreferrer noopener">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" rel="noreferrer noopener">
                  About
                </a>
              </li>
              <li>
                <a href="#service" rel="noreferrer noopener">
                  Service
                </a>
              </li>
              <li>
                <a href="#portfolio" rel="noreferrer noopener">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" rel="noreferrer noopener">
                  Contact
                </a>
              </li>
              <div className="dropdown">
                <button className="dropbtn">PlayLists</button>
                <div className="dropdown-content">
                  {links.map((link) => (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.playlistname}
                    </a>
                  ))}
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;


