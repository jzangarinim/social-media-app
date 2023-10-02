import * as tweetService from "../services/tweets.js";

export async function getTweets(_, res) {
  try {
    const tweets = await tweetService.getAllTweets();
    const sorted = tweets.rows.sort(function (a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
    res.status(200).send(sorted);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    res.end();
  }
}

export async function getOneTweet(req, res) {
  const id = req.params.id;

  try {
    const tweet = await tweetService.getOneTweet(id);
    res.status(201).send(tweet.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    res.end();
  }
}

export async function createTweet(req, res) {
  const data = req.body;

  try {
    const newTweet = await tweetService.createNewTweet(data);
    res.status(201).send(newTweet.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    res.end();
  }
}

export async function editTweet(req, res) {
  const data = req.body;
  const id = req.params.id;

  try {
    const editedTweet = await tweetService.editTweet(id, data);
    res.status(200).send(editedTweet.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    res.end();
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id;
  try {
    const deletedTweet = await tweetService.deleteTweet(id);
    res.status(200).send("Tweet successfully deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    res.end();
  }
}
