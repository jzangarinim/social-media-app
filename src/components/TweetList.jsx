import Tweet from "./Tweet.jsx";

export default function TweetList({ tweets, onRetweet }) {
  return (
    <>
      <div className="mx-auto max-w-[50%] border-x-2 rounded border-violet-600">
        {tweets.map((tweet) => {
          return <Tweet content={tweet} onRetweet={onRetweet} />;
        })}
      </div>
    </>
  );
}
