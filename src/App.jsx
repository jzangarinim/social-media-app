import { useState } from "react";
import TweetForm from "./components/TweetForm.jsx";
import TweetList from "./components/TweetList.jsx";

function App() {
  const [tweets, setTweets] = useState([]);

  function handleSubmit(tweet) {
    if (!tweet) return null;
    setTweets([tweet, ...tweets]);
  }

  return (
    <main className="bg-white dark:bg-violet-800">
      <TweetForm onSubmit={handleSubmit} />
      <TweetList tweets={tweets} onRetweet={handleSubmit} />
    </main>
  );
}

export default App;
