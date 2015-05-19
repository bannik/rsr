var Baobab = require('baobab');

console.log(Baobab);

var rssTree = new Baobab({
		feeds: [
			{
				name: 'EUR/USD',
				price: '1.265896',
				category: 'commodities'
			},
			{
				name: 'EUR/CPY',
				price: '1.265896',
				category: 'commodities'
			},
			{
				name: 'EAS/USD',
				price: '1.265896',
				category: 'commodities'
			},
			{
				name: 'EQWE/USD',
				price: '1.265896',
				category: 'commodities'
			},
			{
				name: 'EQWE./USD',
				price: '1.265896',
				category: 'currencies'
			},
			{
				name: 'USDa/CHF', 
				price: '0.985647',
				category: 'currencies'
			}
		]
});


var feedsCursor = rssTree.select('feeds').get();


module.exports = rssTree;