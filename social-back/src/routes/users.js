import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("hola");
});

router.post("/");

export default router;
