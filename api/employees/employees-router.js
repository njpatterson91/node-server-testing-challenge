const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json("Its up");
});

module.exports = router;
