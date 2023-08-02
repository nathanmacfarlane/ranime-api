const getQuote = (date = new Date()) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const quote = require(`./data/2023/${month}/${day}.json`);

  return quote;
};

module.exports = { getQuote };
