const path = require ("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Hit HTML route");
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/exercise", (req, res) =>{
  console.log ("hit exercise");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req,res) =>{
  console.log("hit Stats");
  res.sendFile(path(__dirname, "../stats.html"));
});

module.exports = router;
