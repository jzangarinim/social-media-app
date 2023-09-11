import { useState } from "react";

export default function SidebarRight() {
  const [search, setSearch] = useState("");

  function handleClear() {
    setSearch("");
  }

  return (
    <div className="flex flex-col w-[100%] h-[60%] pt-2 pl-2">
      <div className="flex">
        <div className="rounded-tl-full rounded-bl-full bg-violet-400">
          <span className="pt-1 pl-2 material-symbols-outlined">search</span>
        </div>
        <div className=" bg-violet-400">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-violet-400 focus:outline-none pt-1 px-1 w-[90%]"
            type="text"
          />
        </div>
        <div className="rounded-tr-full rounded-br-full bg-violet-400">
          <span
            className={`pt-1 pr-2 material-symbols-outlined cursor-pointer ${
              !search ? "invisible" : "visible"
            }`}
            onClick={handleClear}
          >
            close
          </span>
        </div>
      </div>
    </div>
  );
}
