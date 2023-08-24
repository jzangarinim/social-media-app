import { useState, useEffect } from "react";
import TweetForm from "./components/TweetForm.jsx";
import TweetList from "./components/TweetList.jsx";
/* mpx6nu4x */
/* function handleDarkMode(param) {
  console.log(param);
  if (param) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
} */

function App() {
  const [tweets, setTweets] = useState([]);
  function handleSubmit(tweet) {
    if (!tweet) return null;
    setTweets([tweet, ...tweets]);
  }
  /* const [darkMode, setDarkMode] = useState(false); */ /* 
  useEffect(() => {
    //document.documentElement.classList.add("dark");
    handleDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []); */
  return (
    <main className="bg-white dark:bg-violet-800">
      <TweetForm onSubmit={handleSubmit} />
      <TweetList tweets={tweets} onRetweet={handleSubmit} />
    </main>
  );
}

export default App;
