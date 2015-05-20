var Baobab = require('baobab');

var rssTree = new Baobab({
  feeds: [
    
  ]
});

var feedsCursor = rssTree.select('feeds').get();

module.exports = feedsCursor;