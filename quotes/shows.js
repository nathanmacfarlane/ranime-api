var shuffleSeed = require("shuffle-seed");

const getShows = ({ count = 2, exclude = [] } = {}) => {
  const today = new Date();
  const seed = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  const shows = require(`./shows.json`);

  const filtered = shows.filter((show) => !exclude.includes(show));

  const shuffled = shuffleSeed.shuffle(filtered, seed);

  return shuffled.slice(0, count);
};

module.exports = { getShows };
