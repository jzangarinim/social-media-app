import { useState } from "react";
import TweetForm from "./components/TweetForm.jsx";
import TweetList from "./components/TweetList.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";

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
      <div className="w-[10vw] h-[100vh]">
        <Sidebar onSubmit={handleSubmit} />
      </div>
      <div className="flex-col w-[50%]">
        <TweetForm onSubmit={handleSubmit} />
        <TweetList
          tweets={tweets}
          onRetweet={handleSubmit}
          onDeleteRetweet={deleteRetweet}
        />
      </div>
      <div className="w-[10vw]"></div>
    </main>
  );
}

export default App;
