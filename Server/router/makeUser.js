const express = require("express");
const router = express.Router();

const { AllUser, MakeUser } = require("../controller/makeUser.js");

router.get("/", AllUser);
router.post("/", MakeUser);

module.exports = router;
