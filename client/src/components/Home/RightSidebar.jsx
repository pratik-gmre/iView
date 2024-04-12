import React from "react";

export const RightSidebar = () => {
  return (
    <div className="w-[30%]">
      <div className="bg-[#15202B]  w-[80%] m-auto">
        <input
          className="bg-slate-700 rounded-full py-1 px-2 "
          type="text"
          placeholder="Search"
        />

        <div className="whats m-3 bg-gray-900 w-ful py-5 px-3 rounded-xl">
          <h1 className="text-lg font-bold mx-3">Whats Happening</h1>
          <div className="item px-4 p-3 ">
            <div className="hover:bg-gray-800 cursor-pointer rounded-lg p-2">
            <div className=" text-sm text-gray-200">Trending in Nepal</div>
            <div className="font-bold">#Pratik</div>
            <div className="text-sm text-gray-200 text-[10px]">40.3k Posts</div></div>
            <div className="hover:bg-gray-800 cursor-pointer rounded-lg p-2">
            <div className=" text-sm text-gray-200">Trending in Nepal</div>
            <div className="font-bold">#Dang</div>
            <div className="text-sm text-gray-200 text-[10px]">400.3k Posts</div></div>
            <div className="hover:bg-gray-800 cursor-pointer rounded-lg p-2">
            <div className=" text-sm text-gray-200">Trending in Nepal</div>
            <div className="font-bold">#Nepal</div>
            <div className="text-sm text-gray-200 text-[10px]">4000.3k Posts</div></div>
            
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
