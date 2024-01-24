import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "clipboard-copy";
import { IoIosLink } from "react-icons/io";
import client from "../../lib/client";
import "./CodeInput.css"
import { PropagateLoader } from "react-spinners";

const CodeInputPage = () => {
  const [code, setCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isNotFill, setIsNotFill] = useState(false);
  const [isNotCode, setIsNotCode] = useState(false);
  const [isClear, setIsCleared] = useState(false);
  const [linkColor, setLinkColor] = useState("text-white");
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [showLiveButton, setShowLiveButton] = useState(true);
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  // const [postCodes, setPostCodes] = useState([]);

  const handleSave = () =>{
    if(code === ""){
      setSaved(false)
      setIsSaving(false)
      console.clear()
    }else{
    setIsSaving(true)
    localStorage.setItem("code", (code).toString())
    setTimeout(()=>{
      setIsSaving(false)
    },2000)
    setSaved(true)
    setTimeout(()=>{
      setSaved(false)
    },2000)
    console.clear()
  }

  }

  useEffect(()=>{
    const coding = localStorage.getItem("code", (code).toString())
    if(coding){
      setCode(coding);
    }
  })

 const handleCopyClick = (codeToCopy) => {
   if (codeToCopy === "") {
     setIsNotFill(true);
     setTimeout(() => {
       setIsNotFill(false);
     }, 2000);
   } else {
     copy(codeToCopy);
     setIsCopied(true);
     setShowLivePreview(false);
     setLinkColor("text-[#00ff29]");

     // Reset the "Copied!" message after 2 seconds
     setTimeout(() => {
       setIsCopied(false);
       setLinkColor("text-white");
     }, 2000);
   }
 };

 const handleeditedcode = ()=>{
  copy(code)
  setIsText(true)
  setTimeout(()=>{
    setIsText(false)
  },2000)
 }


  const handlebuttonPreview = () => {
    if(code === ""){
       setIsNotCode(true);
       setTimeout(() => {
         setIsNotCode(false);
       }, 2000);
    }else{

      setShowLivePreview(true);
      setShowLiveButton(false);
    }
  };

  const handleClear = () => {
    setCode("");
    localStorage.removeItem("code",(code).toString())
    setIsCleared(true);
    setIsCopied(false); // Reset isCopied when clearing
    setShowLiveButton(true);
    setShowLivePreview(false);
    setTimeout(() => {
      setIsCleared(false);
    }, 2000);
  };

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "react"]{
  //     name,
  //     code,
  //     desc,
  //    }`
  //     )
  //     .then((data) => {
  //       setPostCodes(data);
  //       //  console.log(postCode);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <>
      {/* {postCodes.length === 0 && (
        <div className="w-screen h-screen flex justify-center items-center">
          <PropagateLoader color="#36d7b7" size={20} />
        </div>
      )} */}
      <div className="min-h-screen flex items-center justify-center  w-[80vw] text-black mx-auto md:mt-0 mt-16">
        <div className="p-4 w-full">
          <div className="mb-6">
            <h1 className="text-center text-white mb-4">Code PlayGround</h1>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="6"
            />
            {showLiveButton && (
              <button
                onClick={handlebuttonPreview}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mt-8"
              >
                Show Live Preview
              </button>
            )}
            {isNotCode && (
              <span className="text-green-500 text-sm">code is Empty!</span>
            )}
          </div>
          <div className="flex items-center ">
            <button
              onClick={handleeditedcode}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              {isText ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleClear}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              {isClear ? "Cleared!" : "Clear"}
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              {isSaving ? "Saving!" : "Save"}
            </button>
            {isClear && (
              <span className="text-green-500 text-sm">cleared!</span>
            )}

            {saved && <span className="text-green-500 text-sm">Saved!</span>}
            {isText && <span className="text-green-500 text-sm">Copied!</span>}
          </div>
          {showLivePreview && (
            <div className="live-preview mt-2">
              <iframe
                title="Live Preview"
                className="w-full h-40 border  bg-white rounded-md"
                srcDoc={code}
              />
            </div>
          )}
          <div className="relative mt-8">
            {isCopied && (
              <span className="text-green-500 text-sm absolute right-6 top-0">
                Code copied to clipboard!
              </span>
            )}
            {isNotFill && (
              <span className="text-green-500 text-sm absolute right-6 top-0">
                Code is Empty!
              </span>
            )}
            <IoIosLink
              onClick={() => handleCopyClick(code)}
              className={`absolute right-0 top-0 cursor-pointer  ${linkColor}  text-[26px]`}
            />

            <SyntaxHighlighter language="jsx" style={tomorrow}>
              {code}
            </SyntaxHighlighter>
          </div>
          {/* {postCodes.map((postCode) => (
            <>
              <h2>{postCode.name}</h2>
              <p>{postCode.desc}</p>
              <div className="mt-6 relative">
                {isCopied && (
                  <span className="text-green-500 text-sm absolute right-6 top-0">
                    Code copied to clipboard!
                  </span>
                )}
                {isNotFill && (
                  <span className="text-green-500 text-sm absolute right-6 top-0">
                    Code is Empty!
                  </span>
                )}
                <IoIosLink
                  onClick={() => handleCopyClick(postCode.code)}
                  className={`absolute right-0 top-0 cursor-pointer  ${linkColor}  text-[26px]`}
                />

                <SyntaxHighlighter language="jsx" style={tomorrow}>
                  {postCode.code}
                </SyntaxHighlighter>
              </div>
            </>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default CodeInputPage;
