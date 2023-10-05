import express from "express";
import tweetRoutes from "./routes/tweets.js";
import userRoutes from "./routes/users.js";
import "dotenv/config";
import { dbClient } from "./config/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

/* app.use("/", (req, res, next) => {
  // const whitelist = ['', '', ''];
  // const origin: string = req.headers.origin!; // Non-null assertion operator
  // if (whitelist.indexOf(origin) > -1) {
  //     res.setHeader('Access-Control-Allow-Origin', origin);
  // }

  res.setHeader("Access-Control-Allow-origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Reguested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTION, PATCH, HEAD"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
}); */

app.use("/tweet", tweetRoutes);

app.use("/user", userRoutes);

app.use("*", (req, res) => {
  res.status(404);
  res.send();
  res.end();
});

app.listen(PORT, async () => {
  await dbClient.connect();
  console.log(`Server running on port: ${PORT}`);
});
