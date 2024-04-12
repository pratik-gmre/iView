import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { MdOutlineWorkspacePremium } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className=" flex flex-col w-[20%]">
      <div className="mt-2">
        <Link className="invert">
          {" "}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class=" w-6 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-vlxjld r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </Link>

      </div>
      <div className="sidebar flex flex-col">
<ul className=" flex flex-col justify-start bg-re-500 w-2/3 ">
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><AiFillHome size={21}/>
    <h1 className="text-lg hover:font-semibold ">Home</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><AiOutlineSearch size={21}/>
    <h1 className="text-lg hover:font-semibold ">Explore</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><GrNotification size={21}/>
    <h1 className="text-lg hover:font-semibold ">Notification</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><LuMessageSquare size={21} />
    <h1 className="text-lg hover:font-semibold ">Message</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><MdOutlineFeaturedPlayList size={21}/>
    <h1 className="text-lg hover:font-semibold ">List</h1>
    </Link></li>
    
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><MdOutlineWorkspacePremium size={21}/>
    <h1 className="text-lg hover:font-semibold ">Premium</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700 cursor-pointer rounded-full duration-300"><BsPerson size={21}/>
    <h1 className="text-lg hover:font-semibold ">Profile</h1>
    </Link></li>
    <li><Link className="flex items-center gap-2 w-fit px-2 mt-4 hover:bg-slate-700  cursor-pointer rounded-full duration-300"><IoIosMore size={21}/>
    <h1 className="text-lg hover:font-semibold ">More</h1>
    </Link></li>
    
</ul>
    <div className=" flex justify-center hover:cursor-pointer rounded-full my-4 mr-4 p-3 bg-[#1a8cd8]"><button ><h1 className="font-semibold">Post</h1></button></div>
      </div>

<div className="flex justify-center hover:cursor-pointer m-2 mr-4 p-3 w-full">
<div className="flex justify-between hover:bg-slate-700 rounded-full w-full">
      <div className="flex justify-between gap-2" >
        <div className="mt-2 ml-2 mb-1"> <img className=" size-9 rounded-full"  src="https://pbs.twimg.com/profile_images/1657921537754923008/T8wC15Zd_bigger.jpg" alt="" /></div>
        <div>
            <div><h1 className="font-semibold text-sm">Pratik Ghimire</h1></div>
            <div><h1 className="text-gray-500">@pratikgmre</h1></div>
        </div>
      </div>
      <div className="mr-3 mt-3"><IoIosMore/></div>
      </div>
    </div>
    </div>
  );
};
 