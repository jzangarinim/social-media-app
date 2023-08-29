import { useState } from "react";
import SidebarButton from "./SidebarButton";
import PostModal from "./PostModal";
import PropTypes from "prop-types";

export default function Sidebar({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  return (
    <div className="flex flex-col justify-evenly w-[100%] h-[60%]">
      <SidebarButton icon="house" />
      <SidebarButton icon="magnifying-glass" />
      <SidebarButton icon="bell" />
      <SidebarButton icon="envelope" />
      <SidebarButton icon="list" />
      <SidebarButton icon="bookmark" />
      <SidebarButton icon="users" />
      <SidebarButton icon="user" />
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[85%]"
      >
        Post
      </button>
      <PostModal
        visible={showModal}
        onClose={handleClose}
        onSubmit={onSubmit}
      />
    </div>
  );
}

Sidebar.propTypes = {
  onSubmit: PropTypes.func,
};
