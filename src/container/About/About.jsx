import React, { useEffect, useState } from "react";
import client from "../../lib/client";
import "./About.css";
import { PropagateLoader } from "react-spinners";

const About = () => {
  const [post, setPost] = useState({});
  const [skillCategories, setSkillCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Skills");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const aboutData = await client.fetch(
          `*[_type == "about"]{
            bg {
              asset->{
                url
              },
            },
            desc,
          }`
        );

        setPost(aboutData[0] || {});
      } catch (error) {
        console.error("Error fetching about data:", error);
        setError("Error fetching about data");
      } finally {
        setLoading(false);
      }
    };

    const fetchSkillCategories = async () => {
      try {
        const categories = await client.fetch(
          `*[_type == "aboutcategory"]{
            year,
            details,
            title,
            tags,
          }`
        );

        setSkillCategories(categories);
      } catch (error) {
        console.error("Error fetching skill categories:", error);
        setError("Error fetching skill categories");
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    setError(null);

    fetchAboutData();
    fetchSkillCategories();
  }, [activeTab]);

  const openTab = (tab) => {
    setActiveTab(tab);
  };

  // Update filteredCategory whenever skillCategories or activeTab changes
  const filteredCategory = skillCategories
    .filter((item) => item.tags.includes(activeTab))
    .map((item) => (
      <li key={item.title}>
        <span>{item.title}</span>
        <br />
        {item.details}
      </li>
    ));

  return (
    <>
      {post.length === 0 && (
        <div className="w-screen h-screen flex justify-center items-center">
          <PropagateLoader color="#36d7b7" size={20} />
        </div>
      )}
      <div id="about" className="md:pt-4 pt-16 text-gray-400">
        <div className="container md:w-[80%] md:mx-auto">
          {post && (
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 bg-[#262626] rounded-lg">
                {post?.bg?.asset?.url ? (
                  <img
                    src={post.bg.asset.url}
                    alt="User"
                    className="w-full rounded-lg dropShadowbg"
                  />
                ) : (
                  <PropagateLoader color="#36d7b7" size={10} />
                )}
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-12">
                <h1 className="text-5xl font-semibold text-white mb-8 md:mt-0 mt-4">
                  About Me
                </h1>
                <p className="mb-8">{post.desc}</p>
                <div className="flex mb-10">
                  {["Skills", "Experience", "Education"].map((tab) => (
                    <p
                      key={tab}
                      className={`mr-8 text-lg tab-links font-medium cursor-pointer ${
                        activeTab === tab
                          ? "text-[#40ffc6] active-link"
                          : "text-gray-400 "
                      }`}
                      onClick={() => openTab(tab)}
                    >
                      {tab}
                    </p>
                  ))}
                </div>
                {/* Display filtered data based on the selected tab */}
                {!loading && !error && (
                  <div>
                    <ul>{filteredCategory}</ul>
                  </div>
                )}
                {loading && <PropagateLoader color="#36d7b7" size={10} />}
                {error && (
                  <p className="text-red-600 font-bold font-serif">{error}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
