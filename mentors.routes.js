const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET mentors" });
}   );

router.post("/", (req, res) => {
  res.json({ message: "POST mentor" });
}   );  

router.put("/:name", (req, res) => {
  res.json({ message: "PUT mentor" });
}   );  

router.patch("/:name", (req, res) => {  
  res.json({ message: "PATCH mentor" });
}           );      

router.delete("/:name", (req, res) => {
  res.json({ message: "DELETE mentor" });
}   );

router.delete("/", (req, res) => {
  res.json({ message: "DELETE mentors" });
}   );

module.exports = router;