import React, { useEffect, useState } from "react";
import { FaLinkSlash } from "react-icons/fa6";
import client from "../../lib/client";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Portfolio = () => {
  const [posts, setPosts] = useState([]);
  const [firstPost, setFirstPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "projects"]{
      title,
      desc,
      image{
        asset->{
          url
        },
      },
      link,
    }
    `
      )
      .then((data) => {
        if (data.length > 0) {
          setFirstPost(data[0]);
          setPosts(data.slice(0, 3));
          // console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {(posts.length === 0 || firstPost?.length === 0) && (
        <div className="w-screen h-screen flex justify-center items-center">
          <PropagateLoader color="#36d7b7" size={20} />
        </div>
      )}
      <div id="portfolio" className="py-10 w-[80%] mx-auto">
        <div className="container">
          <h1 className="sub-title text-white  text-center text-[30px] font-bold font-serif">
            My Projects
          </h1>
          {firstPost ? (
            <div className="first-post">
              <div className="work relative overflow-hidden rounded object-cover">
                {firstPost.image.asset.url ? (
                  <img
                    src={firstPost.image.asset.url}
                    alt={firstPost.title}
                    className="w-full rounded transform transition-transform hover:scale-110 h-[30rem]"
                  />
                ) : (
                  <PropagateLoader color="#36d7b7" size={10} />
                )}
                <div className="layer">
                  <h3 className="md:font-bold font-normal font-mono mb-1 md:mb-4">
                    {firstPost.title}
                  </h3>
                  <p className="text-sm md:mb-4 mb-1">{`${firstPost.desc.substring(
                    0,
                    window.innerWidth < 768 ? 100 : 1431
                  )}...`}</p>
                  <a
                    href={firstPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-xs  bg-white w-16 h-16 flex items-center justify-center rounded-full"
                  >
                    <FaLinkSlash className="fas fa-link" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <PropagateLoader color="#36d7b7" size={10} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="work relative overflow-hidden rounded object-cover"
              >
                {post.image.asset.url ? (
                  <img
                    src={post.image.asset.url}
                    alt={post.title}
                    className="w-full rounded transform transition-transform hover:scale-110 h-[20rem] md:h-[30rem]"
                  />
                ) : (
                  <PropagateLoader color="#36d7b7" size={10} />
                )}
                <div className="layer">
                  <h3 className="md:font-bold font-normal font-mono mb-1 md:mb-4">
                    {post.title}
                  </h3>
                  <p className="text-sm mb-1 md:mb-4">{`${post.desc.substring(
                    0,
                    window.innerWidth < 768 ? 100 : 200
                  )}...`}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-xs  bg-white w-16 h-16 flex items-center justify-center rounded-full"
                  >
                    <FaLinkSlash className="fas fa-link" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto relative">
        <div className="absolute right-0 top-0">
          <Link
            to={`/allprojects`}
            className="btn block mx-auto mt-2 px-6 py-3 border border-green-500 rounded text-white hover:bg-green-500 transition duration-500"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
