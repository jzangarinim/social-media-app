import Tweet from "./Tweet.jsx";
import PropTypes from "prop-types";

export default function TweetList({ tweets, onRetweet, onDeleteRetweet }) {
  return (
    <>
      <div className="mx-auto max-w-[50%] border-x-2 rounded border-violet-600">
        {tweets.map((tweet) => {
          return (
            <Tweet
              content={tweet}
              onRetweet={onRetweet}
              onDeleteRetweet={onDeleteRetweet}
            />
          );
        })}
      </div>
    </>
  );
}

TweetList.propTypes = {
  tweets: PropTypes.array,
  onRetweet: PropTypes.func,
  onDeleteRetweet: PropTypes.func,
};
