var React = require('react');


var AssetTitle = React.createClass({
	render: function(){
		return(
			<div className="asset_ttl">
				<h3>{this.props.category}</h3>
			</div>
		);
	}
});
var SingleAsset = React.createClass({
	render: function(){
		return(
			<li>
				<p>{this.props.asset.name}</p>
				<h3>{this.props.asset.price}</h3>
			</li>
		);
	}
});
var AssetList = React.createClass({
	getInitialState: function() {
        // Binding cursor to cursor in props
        this.cursor = this.props.assets.select('assets');
        // Making update handler
        this.__updateHandler = (function() {
            this.setState({ass: this.cursor.get()});
        }).bind(this);

        return {ass: this.cursor.get()};
    },
    componentDidMount: function() {
        // Listening to updates
        this.cursor.on('update', this.__updateHandler);
    },
    componentWillUnmount: function() {
        // Unbinding handler
        this.cursor.off('update', this.__updateHandler);
    },
	render: function(){
		var rows = [];
        var lastCategory = null;
	        this.state.ass.forEach(function(asset) {
        	if (asset.category !== lastCategory) {
                rows.push(<AssetTitle category={asset.category} key={asset.category} />);
            }
        	rows.push(<SingleAsset asset={asset} key={asset.name} />);
            lastCategory = asset.category;
        }.bind(this));
		return(
			<ul>
				{rows}
			</ul>
		);
	}
});
var AssetSideBar = React.createClass({
	render: function(){
		return(
			<div>
				<div className="row">
					<AssetList assets={this.props.assets}/>
				</div>
			</div>
		);
	}
});

var MainApp = React.createClass({
	render: function(){}
});

module.exports = AssetSideBar;