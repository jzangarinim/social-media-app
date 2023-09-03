import PropTypes from "prop-types";

export default function SidebarButton({ icon }) {
  let aux = "";
  if (icon === "house") {
    aux = "Home";
  } else if (icon === "magnifying-glass") {
    aux = "Search";
  } else if (icon === "bell") {
    aux = "Notifications";
  } else if (icon === "envelope") {
    aux = "Messages";
  } else if (icon === "list") {
    aux = "Lists";
  } else if (icon === "bookmark") {
    aux = "Bookmarks";
  } else if (icon === "users") {
    aux = "Users";
  } else if (icon === "user") {
    aux = "Profile";
  }

  return (
    <button className="rounded dark:bg-violet-800 dark:text-white text-left h-[10%]">
      <i className={`fa-solid fa-${icon} mx-3`}></i>
      {aux}
    </button>
  );
}

SidebarButton.propTypes = {
  icon: PropTypes.string,
};
