const express = require("express");
const dotenv = require("dotenv");
const { getQuote } = require("./quotes/quotes");

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const quote = getQuote();
  res.send({ quote });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
