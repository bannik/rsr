var React = require('react');
var Baobab = require('baobab');
var rssTree = require('./rssTree.js');

console.log(rssTree);
// console.log(Baobab);

var App = React.createClass({
	getInitialState: function(){
		return{
			feedname: 'this shit sucks',
			feedlink: '',
			id: 0
		}
	},
	update: function(fdata){
		this.setState({
			feedlink: fdata.feedlink,
			feedname: fdata.feedname,
			id: this.state.id + 1
		});
		rssTree.push({name: fdata.feedname, url: fdata.feedlink, id: this.state.id + 1});

	},
	render: function(){
		return (
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

	    var feedlink = React.findDOMNode(this.refs.feedlink).value.trim();
	    var feedname = React.findDOMNode(this.refs.feedname).value.trim();
	    if (!feedlink || !feedname) {
	      return;
	    }
	    this.props.onFeedSubmit({feedlink: feedlink, feedname: feedname});
	    React.findDOMNode(this.refs.feedlink).value = '';
	    React.findDOMNode(this.refs.feedname).value = '';
	},
	render: function(){
		return(
			<div>
				<InputAdd ref="feedname" />
				<InputAdd ref="feedlink" />
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
        var name = this.props.feed.name;
				var url = this.props.feed.url;
        return (
						<div>
	            <button>{name}</button>
							<a href={"" + url}>{url}</a>
						</div>
        );
    }
});


var ContentBox = React.createClass({
	getInitialState: function(){
		return {
			id: 0
		}
	},
	render: function(){
		return(
			<div>
				<FeedsList feeds={rssTree} />
				<p>{this.state.id}</p>
			</div>
		);
	}
});
var FEEDS = [];
module.exports = App;