import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>hola</h1>");
  console.log("Obteniendo info");
});

router.post("/", (req, res) => {
  console.log("Creando info");
});

router.put("/", (req, res) => {
  console.log("Modificando info");
});

router.patch("/", (req, res) => {
  console.log("Modificando info 2");
});

router.delete("/", (req, res) => {
  console.log("Borrando info");
});

export default router;
