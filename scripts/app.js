var React = require('react');
var rssTree = require('rssTree.js');

console.log(feedsCursor);


var App = React.createClass({
	getInitialState: function(){
		return{
			feed: 'this shit sucks',
			fname: '',
			id: 0
		}
	},
	update: function(fdata){
		this.setState({
			feed: fdata.feed,
			fname: fdata.fname,
			id: this.state.id + 1
		});
		FEEDS.push({feedlink: fdata.fname, feedname: fdata.feed, id: this.state.id});
		console.log(FEEDS);
	},
	render: function(){
		return(
			<div className="container">
				<AddForm onFeedSubmit={this.update}/>
				<label>{this.state.id}</label>
				<ContentBox />
			</div>
		);
	}
});
var InputAdd = React.createClass({
	render: function(){
		return(
			<input type="text"/>
		);
	}
});
var AddForm = React.createClass({
	handleSubmit: function(e) {
	    e.preventDefault();
	    console.log(React.findDOMNode)
	    var feed = React.findDOMNode(this.refs.feed).value.trim();
	    var fname = React.findDOMNode(this.refs.fname).value.trim();
	    if (!feed || !fname) {
	      return;
	    }
	    this.props.onFeedSubmit({feed: feed, fname: fname});
	    React.findDOMNode(this.refs.feed).value = '';
	    React.findDOMNode(this.refs.fname).value = '';
	},
	render: function(){
		return(
			<div>
				<InputAdd ref="feed" />
				<InputAdd ref="fname" />
				<button onClick={this.handleSubmit}>Save</button>
			</div>
		);
	}
});
var FeedsList = React.createClass({
	render: function(){
		var rows = [];
		this.props.feeds.forEach(function(feed){
			rows.push(<FeedsRow feed={feed} key={feed.id}/>);
		}.bind(this));
		return(
			<div>
				{rows}
			</div>
		);
	}
});
var FeedsRow = React.createClass({
	render: function() {
        var name = this.props.feed.feedname;
        return (
            <button>{name}</button>
        );
    }
});


var ContentBox = React.createClass({
	getInitialState: function(){
		return{
			id: 0
		}
	},
	render: function(){
		return(
			<div>
			<FeedsList feeds={FEEDS} /> 
			<p>{this.state.id}</p>
			</div>
		);
	}
});
var FEEDS = [];

module.exports = App;