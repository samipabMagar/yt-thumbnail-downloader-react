import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import getYouTubeID from "get-youtube-id";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [url, setUrl] = useState("");
  const [urlModels, setUrlModels] = useState([
      {
      width: 120,
      height: 90,
      fileName: "default.jpg"
    },
    {
      width: 320,
      height: 180,
      fileName: "mqdefault.jpg"
    },
    {
      width: 480,
      height: 360,
      fileName: "hqdefault.jpg"
    },
    {
      width: 640,
      height: 480,
      fileName: "sddefault.jpg"
    },
    {
      width: 1280,
      height: 720,
      fileName: "maxresdefault.jpg"
    },
  ])
 
  const getThumbnail = (e) => {
    e.preventDefault();
    const videoId = getYouTubeID(url);
   if(videoId) {
     const model = urlModels.map((item, index) => {
      return {
        ...item, url: `https://img.youtube.com/vi/${videoId}/${item.fileName}`
      }
    })
    setUrlModels(model)
   }else {
    toast.error("invalid url")
   }
  }
  return (
    <div className="bg-rose-100 min-h-screen w-full flex flex-col px-5  items-center ">
      <form onSubmit={getThumbnail} className="flex py-5 gap-5 items-center justify-center">
        <input value={url} onChange={(e) => setUrl(e.target.value)} className="py-1 px-4 outline-0 md:w-[400px] md:px-10 md:py-2  bg-white rounded " placeholder="enter video url"  type="url" />
        <button className="flex hover:scale-95 cursor-pointer active:scale-90  bg-sky-200 rounded text-shadow-zinc-400 md:px-4 md:py-2 py-1 px-2 items-center gap-2"><BsSearch className="text-[13px]" />search</button>
      </form>
      <div className="grid border border-white rounded md:grid-cols-3 grid-cols-1  gap-10 my-5 p-2 bg-white">
       {
        urlModels &&
        urlModels.map((item, index)=> {
          return  <div className="bg-zinc-100 p-40 rounded ">
            <img src={`${item.url}`} alt="" />
        </div>
        })
       }
        
      </div>
      <ToastContainer/>
    </div>
  );
};

export default App;
