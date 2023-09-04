import ProfileHeader from "../components/ProfileHeader";
import Sidebar from "../components/Sidebar";
import TweetList from "../components/TweetList";

export default function User() {
  return (
    <main className="bg-white dark:bg-violet-800 flex justify-center">
      <div className="w-[10vw] h-[100vh]">
        <Sidebar />
      </div>
      <div className="flex-col w-[40%]">
        {/* <TweetList /> */}
        <ProfileHeader />
      </div>
      <div className="w-[10vw]"></div>
    </main>
  );
}
