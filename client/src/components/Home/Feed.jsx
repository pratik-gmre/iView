import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FiShare } from "react-icons/fi";


export const Feed = () => {
  return (
    <div className="  border-x-2 border-r-2 border-l-2  border-slate-800 w-[50%]">
      <div className="flex justify-between border-b-2 border-slate-700">
        <div className=" flex justify-center p-2 w-[45%] text-sm  font-semibold hover:bg-[#2c3640] ">
          For you
        </div>
        <div className=" flex justify-center text-sm w-[45%] p-2  hover:bg-[#2c3640] ">
          {" "}
          Following
        </div>
        <div className=" flex justify-center w-[10%]">
          <div>
            <Link className=" hover:bg-[#2c3640] rounded-full">
              <AiOutlineSetting className="mt-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-slate-700">
        <div className=" flex p-2 gap-2 ">
          <img
            className=" size-9 rounded-full"
            src="https://pbs.twimg.com/profile_images/1657921537754923008/T8wC15Zd_bigger.jpg"
            alt=""
          />
          <h1 className="text-gray-400">What is happening?!</h1>
        </div>

        <div className="flex justify-between">
          <div className="flex  justify-center gap-3 w-[50%]">
            <div>
              <GrGallery color="#1d9bf0" />
            </div>
            <div>
              <AiOutlineFileGif color="#1d9bf0" />
            </div>
            <div>
              <BsEmojiSmile color="#1d9bf0" />
            </div>
            <div>
              <CiLocationOn color="#1d9bf0" />
            </div>
          </div>

          <div className="bg-[#195e8d]   mb-2 mr-2 rounded-full">
            <button>
              <h1 className="text-gray-400 text-sm px-4">Post</h1>
            </button>
          </div>
        </div>
      </div>







      <div className="border-b-slate-700">
        <div className="flex justify-between mr-2 p-3">
          <div className="flex gap-2">
            <div >
              <img className="size-9 rounded-full"
                src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_bigger.jpg"
                alt=""
              />
            </div>
            <div>
              <div>
              <h1 className="font-semibold hover:underline underline-offset-2 text-sm">
                Cristiano Ronaldo
              </h1>

             </div>
              <h2 className="text-sm">Back</h2>
            </div>
          </div>
          <div >
            <IoIosMore  color="#6b7377"/>
          </div>
        </div>



<div className="flex mx-1 ">
    <img className="size-60 rounded-l-2xl" src="https://pbs.twimg.com/media/GJ1T7lJW0AAGOp0?format=jpg&name=small" alt="" />
    <img className="size-60 rounded-r-2xl" src="https://pbs.twimg.com/media/GJ1T7lWWoAAxWzs?format=jpg&name=small" alt="" />
</div>

<div className="flex justify-between m-3 ">
    <div className=" flex justify-between w-[60%]">
       <div className="flex gap-1"><BiMessageRounded color="#1d9bf0" /> <h1 className="text-[11px] text-[#1d9bf0]">8.9k</h1> </div>
       <div className="flex gap-1"><BiRepost color="#1d9bf0"/><h1 className="text-[11px] text-[#1d9bf0]" >24k</h1> </div>
       <div className="flex gap-1"><AiOutlineHeart color="#1d9bf0"/><h1 className="text-[11px] text-[#1d9bf0]">404k </h1></div>
    </div>
    <div className=" flex justify-end gap-3 w-[40%]"> 
        <div className="flex"><BiBookmark color="#1d9bf0"/></div>
        <div className="flex"><FiShare color="#1d9bf0"/></div>
    </div>
</div>

      </div>
    </div>
  );
};
