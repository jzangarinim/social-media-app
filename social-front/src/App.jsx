import { useState } from "react";
import TweetForm from "./components/TweetForm.jsx";
import TweetList from "./components/TweetList.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import SidebarRight from "./components/SidebarRight.jsx";

function App() {
  const [tweets, setTweets] = useState([]);

  function deleteRetweet(id) {
    const newTweets = tweets.filter((tweet) => {
      return id !== tweet.postId;
    });
    setTweets(newTweets);
  }
  function handleSubmit(tweet) {
    if (!tweet) return null;
    setTweets([tweet, ...tweets]);
  }

  return (
    <main className="bg-white dark:bg-violet-800 flex justify-center">
      <aside className="w-[20vw] lg:w-[10vw] h-[100vh]">
        <Sidebar onSubmit={handleSubmit} />
      </aside>
      <div className="flex-col lg:w-[40%]">
        <TweetForm onSubmit={handleSubmit} />
        <TweetList
          tweets={tweets}
          onRetweet={handleSubmit}
          onDeleteRetweet={deleteRetweet}
        />
      </div>
      <aside className="w-[20vw] lg:w-[10vw]">
        <SidebarRight />
      </aside>
    </main>
  );
}

export default App;
