import express from "express";
import { dbClient } from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tweets = await dbClient.query("SELECT * FROM tweets");
  res.send(tweets.rows);
});

router.post("/", async (req, res) => {
  const data = req.body;
  const newTweet = await dbClient.query(
    "INSERT INTO tweets(tweet_user, img_url, tweet_content) VALUES ($1,$2,$3) RETURNING *",
    [data.tweet_user, data.img_url, data.tweet_content]
  );
  res.status(203).send(newTweet.rows);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const updatedTweet = await dbClient.query(
    "UPDATE tweets SET tweet_user = $1, img_url = $2, tweet_content = $3 WHERE id = $4 RETURNING *",
    [data.tweet_user, data.img_url, data.tweet_content, id]
  );
  console.log(updatedTweet);
  res.status(203).send(updatedTweet.rows);
});

router.patch("/", (req, res) => {
  console.log("Modificando info 2");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedTweet = await dbClient.query(
    "DELETE FROM tweets WHERE id = $1",
    [id]
  );
  res.status(202).send("Tweet successfully deleted!");
});

export default router;
