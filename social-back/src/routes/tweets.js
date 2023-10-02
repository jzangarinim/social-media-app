import express from "express";
import * as tweetController from "../controllers/tweets.js";

const router = express.Router();

router.get("/", tweetController.getTweets);

router.get("/:id", tweetController.getOneTweet);

router.post("/", tweetController.createTweet);

router.put("/:id", tweetController.editTweet);

router.patch("/", (req, res) => {
  console.log("Modificando info 2");
});

router.delete("/:id", tweetController.deleteTweet);

export default router;
