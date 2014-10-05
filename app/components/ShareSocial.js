/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<span className="share-social">
				<a href="javascript://" title="Share on Twitter"><i className="icon-twitter"></i></a>
				<a href="javascript://" title="Share on Facebook"><i className="icon-facebook"></i></a>
				<a href="javascript://" title="Share on Google+"><i className="icon-google-plus"></i></a>
			</span>
		);
	}
});
