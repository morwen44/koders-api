const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Koders middleware"); //router middleware
  next();
});

router.get(
  "/",
  (req, res, next) => {
    console.log("get koders middle"); //route middleware
    next();
  },
  (req, res) => {
    res.json({ message: "GET koders" });
  }
);

router.post("/", (req, res) => {
  res.json({ message: "POST koders" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "PUT koder" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH koder" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE koder" });
});

router.delete("/", (req, res) => {
  res.json({ message: "DELETE koders" });
});

module.exports = router;
