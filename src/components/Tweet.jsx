import { Profile1 } from "../assets";
import PropTypes from "prop-types";

export default function Tweet({ content, onRetweet, onDeleteRetweet }) {
  function handleRetweet() {
    onRetweet({
      id: Date.now(),
      username: "jzangarinim",
      name: "José Zangarini",
      postId: Date.now(),
      tweetContent: content.tweetContent,
      img: content.img,
      reposted: true,
    });
  }
  function handleViewImage() {}

  return (
    <>
      <div className="text-gray-950 py-3 px-5 cursor-pointer border-b border-violet-600 bg-violet-400">
        {/* Retweet info */}
        <div
          className={`flex max-h-5 px-4 mb-1 ml-1 items-center translate-x-12 ${
            content?.reposted ? "" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="hover:fill-gray-500 h-5 mr-1"
          >
            <path d="M280-80 120-240l160-160 42 44-86 86h464v-160h60v220H236l86 86-42 44Zm-80-450v-220h524l-86-86 42-44 160 160-160 160-42-44 86-86H260v160h-60Z" />
          </svg>
          <p className="text-gray-600 text-sm hover:underline">
            {content?.name} reposted
          </p>
        </div>
        {/* Tweet body */}
        <div className="flex">
          <img
            className="w-14 h-14 rounded-full object-cover mr-4"
            src={Profile1}
            alt="Profile picture"
          />
          <div className="w-full">
            <div className="flex justify-start">
              <p className="mr-3 font-bold capitalize hover:underline">
                {content?.name}
              </p>
              <p className="">@jzangarinim</p>
            </div>
            <div className="mb-4">
              <p className="mb-4">{content?.tweetContent}</p>
            </div>
            {content?.img !== "" && (
              <div className="w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={content.img}
                  className="h-full object-center max-h-[650px] object-cover"
                  onClick={handleViewImage}
                />
              </div>
            )}

            <div className="h-6 flex justify-between">
              {/* Comment icon */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="mr-2"
                >
                  <path d="M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z" />
                </svg>
                <span className="self-center">50</span>
                {/* <img src={Chat} alt="" className="cursor-pointer" /> */}
              </div>
              {/* RT icon */}
              <div className="flex hover:text-green-600 hover:fill-green-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="mr-2"
                  onClick={
                    content.reposted
                      ? () => onDeleteRetweet(content.postId)
                      : handleRetweet
                  }
                >
                  <path d="M280-80 120-240l160-160 42 44-86 86h464v-160h60v220H236l86 86-42 44Zm-80-450v-220h524l-86-86 42-44 160 160-160 160-42-44 86-86H260v160h-60Z" />
                </svg>
                <span className="self-center">12</span>
                {/* <img src={Repeat} alt="" className="cursor-pointer" /> */}
              </div>
              {/* Like icon */}
              <div className="flex hover:text-red-600 hover:fill-red-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="mr-2"
                >
                  <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
                </svg>
                <span className="self-center">45</span>
              </div>
              {/* Stats icon */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="mr-2"
                >
                  <path d="M160-160v-440h140v440H160Zm250 0v-640h140v640H410Zm250 0v-280h140v280H660Z" />
                </svg>
                <span className="self-center">182</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Tweet.propTypes = {
  content: PropTypes.object,
  onRetweet: PropTypes.func,
  onDeleteRetweet: PropTypes.func,
};
