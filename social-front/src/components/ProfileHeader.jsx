import { Link } from "react-router-dom";
import { Profile1 } from "../assets";

export default function ProfileHeader() {
  return (
    <div className="rounded min-h-[24rem] border-x-2 border-b border-violet-600 bg-violet-400 overflow-auto">
      <div className="py-3 px-5 h-[10%] border-b border-violet-600">
        <Link to="/">
          <i className="fa-solid fa-arrow-left pr-3"></i>
        </Link>
        Go back
      </div>
      <div className="h-[6rem] lg:h-[14rem] border-b border-violet-600">
        <img
          className="w-[100%] h-[100%] object-cover overflow-hidden"
          src={Profile1}
          alt="Banner picture"
        />
      </div>
      <div className="py-3 px-5 h-[100%] border-b border-violet-600">
        <div className="flex justify-end">
          <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Edit profile
          </button>
        </div>
        <div className="pt-4">José Zangarini</div>
        <div className="text-violet-500 text-sm">@jzangarinim</div>
        <div className="pt-2">must b nice</div>
        <div className="pt-2 flex">
          <div>
            <span className="material-symbols-outlined pr-2">cake</span>Born
            March 9, 1996
          </div>
          <div>
            <span className="material-symbols-outlined pl-3 pr-2">
              calendar_month
            </span>
            Joined July, 2016
          </div>
        </div>
        <div className="pt-2">Followers & following</div>
        <div className="pt-2 flex justify-evenly">
          <div className="hover:bg-violet-600 p-3 hover:cursor-pointer rounded">
            Posts
          </div>
          <div className="hover:bg-violet-600 p-3 hover:cursor-pointer rounded">
            Replies
          </div>
          <div className="hover:bg-violet-600 p-3 hover:cursor-pointer rounded">
            Highlights
          </div>
          <div className="hover:bg-violet-600 p-3 hover:cursor-pointer rounded">
            Media
          </div>
          <div className="hover:bg-violet-600 p-3 hover:cursor-pointer rounded">
            Likes
          </div>
        </div>
      </div>
      <div className="w-28 h-28 border-2 border-violet-400 rounded-full relative bottom-[22rem] left-4 md:bottom-[21rem] lg:left-6 bg-violet-400">
        <img
          className="w-[100%] h-[100%] object-cover overflow-hidden rounded-full mb-4"
          src={Profile1}
          alt="Banner picture"
        />
      </div>
    </div>
  );
}
