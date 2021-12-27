const express = require("express");
const app = express();
const cors = require("cors");

const User = require("./router/makeUser.js");
const Board = require("./router/makeBoard.js");
const PORT = process.env.PROT || 8080;

app.use("/makeUser", User);
app.use("/makeBoard", Board);

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`${PORT}서버가 작동 중 입니다.`);
});
