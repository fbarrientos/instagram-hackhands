module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '1bfad11d8b2f4c9eb22f57f3715b34b3',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};
