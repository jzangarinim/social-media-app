import { dbClient } from "../config/db.js";

export async function getAllTweets() {
  const query = {
    text: "SELECT * FROM tweets",
  };
  return await dbClient.query(query);
}

export async function getOneTweet(id) {
  const query = {
    text: "SELECT * FROM tweets WHERE id = $1",
    values: [id],
  };
  return await dbClient.query(query);
}

export async function createNewTweet(data) {
  const query = {
    text: "INSERT INTO tweets(tweet_user, img_url, tweet_content) VALUES ($1,$2,$3) RETURNING *",
    values: [data.tweet_user, data.img_url, data.tweet_content],
  };

  return await dbClient.query(query);
}

export async function editTweet(id, data) {
  const query = {
    text: "UPDATE tweets SET tweet_user = $1, img_url = $2, tweet_content = $3 WHERE id = $4 RETURNING *",
    values: [data.tweet_user, data.img_url, data.tweet_content, id],
  };

  return await dbClient.query(query);
}

export async function deleteTweet(id) {
  const query = {
    text: "DELETE FROM tweets WHERE id = $1",
    values: [id],
  };

  return await dbClient.query(query);
}
