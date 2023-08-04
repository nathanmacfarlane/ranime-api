const express = require("express");
const dotenv = require("dotenv");
const { getQuote } = require("./quotes/quotes");
const { getShows } = require("./quotes/shows");

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const quote = getQuote();
  const options = getShows({ exclude: [quote.show] });
  res.send({ quote, options });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
