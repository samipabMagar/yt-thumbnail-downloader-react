import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import getYouTubeID from "get-youtube-id";

const App = () => {
  const [url, setUrl] = useState("");
  const [urlModels, setUrlModels] = useState([
    {
      width: 120,
      height: 90,
      url:"https://img.youtube.com/vi/",
      fileName: "default.jpg"
    },
    {
      width: 120,
      height: 90,
      url:"https://img.youtube.com/vi/",
      fileName: "default.jpg"
    },
    {
      width: 120,
      height: 90,
      url:"https://img.youtube.com/vi/",
      fileName: "default.jpg"
    },
    {
      width: 120,
      height: 90,
      url:"https://img.youtube.com/vi/",
      fileName: "default.jpg"
    },
    {
      width: 120,
      height: 90,
      url:"https://img.youtube.com/vi/",
      fileName: "default.jpg"
    },
  ])
  // const model = [
  //   {
  //   url:"",
    
  // }
  // ]
  const getThumbnail = (e) => {
    e.preventDefault();
    const videoId = getYouTubeID(url);
    console.log(videoId);
  }
  return (
    <div className="bg-rose-100 min-h-screen w-full flex flex-col px-5  items-center ">
      <form onSubmit={getThumbnail} className="flex py-5 gap-5 items-center justify-center">
        <input value={url} onChange={(e) => setUrl(e.target.value)} className="py-1 px-4 outline-0 md:w-[400px] md:px-10 md:py-2  bg-white rounded " placeholder="enter video url" required type="url" />
        <button className="flex hover:scale-95 cursor-pointer active:scale-90  bg-sky-200 rounded text-shadow-zinc-400 md:px-4 md:py-2 py-1 px-2 items-center gap-2"><BsSearch className="text-[13px]" />search</button>
      </form>
      <div className="grid border border-white rounded md:grid-cols-3 grid-cols-1  gap-10 my-5 p-2 bg-white">
        <div className="bg-zinc-100 p-40 rounded ">

        </div>
        <div className="bg-zinc-100 p-40 rounded ">

        </div>
        <div className="bg-zinc-100 p-40 rounded ">

        </div>
        <div className="bg-zinc-100 p-40 rounded ">

        </div>
        <div className="bg-zinc-100 p-40 rounded ">

        </div>
      </div>
    </div>
  );
};

export default App;
