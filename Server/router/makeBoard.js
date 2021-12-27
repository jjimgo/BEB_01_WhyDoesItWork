const express = require("express");
const router = express.Router();

const { AllBoard, MakeBoard } = require("../controller/makeBoard.js");

router.get("/", AllBoard);
router.post("/", MakeBoard);

module.exports = router;
