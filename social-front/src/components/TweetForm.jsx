import { useState, useRef } from "react";
import { Profile1 } from "../assets";
import PropTypes from "prop-types";

const initialState = {
  id: Date.now(),
  username: "jzangarinim",
  name: "José Zangarini",
  img: "",
  reposted: false,
};

export default function TweetForm({ onSubmit }) {
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const [tweet, setTweet] = useState("");
  const [user] = useState(initialState);

  function handleFileChange(e) {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    let file = e.target.files[0];
    if (file.type.indexOf("image") >= 0) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", (e) => {
        imgRef.current.src = e.target.result;
      });
    }

    // let files = e.target.files; RETORNA UN FILELIST
    // let files = Array.from(e.target.files);
    //const files = [...e.target.files];

    /* const files = [...e.target.files];
    files.forEach(async (file) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", (e) => {
        setImages([...images, e.target.result]);
      });
    });  */

    /* const fileReader = new FileReader();
    fileReader.addEventListener("load", function (e) {
      console.log(e.target);
      imgRef.src = e.target.files[0].result;
    }); */
  }
  function handleClick() {
    inputRef.current.click();
  }
  function handleSubmit() {
    if (!tweet) return null;
    onSubmit({
      ...user,
      postId: Date.now(),
      tweetContent: tweet,
      /* String del localhost debe ser contenido dentro de una constante en un archivo .env */
      img:
        imgRef.current?.src !== "http://localhost:5173/"
          ? imgRef.current?.src
          : "",
    });
    setTweet("");
    imgRef.current.src = "";
  }

  return (
    <div className="rounded min-h-[12rem] py-3 pt-6 px-5 border-x-2 border-b border-violet-600 bg-violet-400 overflow-auto">
      <div className="flex h-full">
        <img
          src={Profile1}
          alt="Profile pic miniature"
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col h-full w-full">
          <div>
            <textarea
              type="text"
              maxLength={500}
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              placeholder="What is happening?!"
              className="pl-3 pt-3 w-full bg-violet-400 rounded focus:outline-none resize-none break-all min-h-[6rem] overflow-auto placeholder-gray-950 text-gray-900"
            ></textarea>
            {/* {images.map((image, key) => {
              return <img key={key} src={image} ref={image} alt="" />;
            })} */}
            <img
              src=""
              ref={imgRef}
              className="max-h-[650px] w-full object-cover mb-3"
            />
          </div>
          <div className="flex justify-between pt-3 border-t border-violet-700">
            {/* Buttons */}
            <div className="flex">
              {/* Add picture button */}
              <input
                className="hidden"
                ref={inputRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Upload an image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                    onClick={handleClick}
                  >
                    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z" />
                  </svg>
                </a>
              </div>
              {/* Add GIF button */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Upload a GIF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                  >
                    <path d="M330-400h61q12.325 0 20.663-9Q420-418 420-430v-40h-30v40h-60v-100h88q0-12-8.05-21T390-560h-60q-12.75 0-21.375 8.625T300-530v100q0 12.75 8.625 21.375T330-400Zm135 0h30v-160h-30v160Zm75 0h30v-60h70v-30h-70v-40h90v-30H540v160ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
                  </svg>
                </a>
              </div>
              {/* Poll button */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Start a poll"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                  >
                    <path d="M300-286q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
                  </svg>
                </a>
              </div>
              {/* Emoji button */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Add emoji"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                  >
                    <path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z" />
                  </svg>
                </a>
              </div>
              {/* Event button */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Schedule an event"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                  >
                    <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm100 210v-60h400v60H280Zm0 180v-60h279v60H280Z" />
                  </svg>
                </a>
              </div>
              {/* Location button */}
              <div className="flex hover:text-sky-400 hover:fill-sky-400 transition translate-x-3">
                <a
                  href="#"
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Add location"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="mr-2 h-5 cursor-pointer"
                  >
                    <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                </a>
              </div>
            </div>

            <button
              className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TweetForm.propTypes = {
  onSubmit: PropTypes.func,
};
