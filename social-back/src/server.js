import express from "express";
import tweetRoutes from "./routes/tweets.js";
import "dotenv/config";

const app = express();
const PORT = process.env.BACKEND_PORT;

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

app.use("*", (req, res) => {
  res.status(404);
  res.send();
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
