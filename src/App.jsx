import { useState } from "react";
import TweetForm from "./components/TweetForm.jsx";
import TweetList from "./components/TweetList.jsx";
import "./App.css";

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
    <main className="bg-white dark:bg-violet-800">
      <TweetForm onSubmit={handleSubmit} />
      <TweetList
        tweets={tweets}
        onRetweet={handleSubmit}
        onDeleteRetweet={deleteRetweet}
      />
    </main>
  );
}

export default App;
