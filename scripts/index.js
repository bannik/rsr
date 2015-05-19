var React = require('react');
var assetTree = require('./assetTree.js');
var App = require('./app.js');

var updatecursor = assetTree.select('assets', 0);

	setInterval(function(){
		updatecursor.set({
			name: 'EUR/USD',
			price: Math.random(),
			category: 'commodities'
		});
	}, 1000);

React.render(<App assets={assetTree} />, document.body);
