import React, { Component } from 'react';

export default class ShareSocial extends Component {
	render() {
		return (
			<span className="ShareSocial">
				<a href="javascript://" title="Share on Twitter"><i className="fa fa-twitter"/></a>
				<a href="javascript://" title="Share on Facebook"><i className="fa fa-facebook"/></a>
				<a href="javascript://" title="Share on Google+"><i className="fa fa-google-plus"/></a>
			</span>
		);
	}
};
