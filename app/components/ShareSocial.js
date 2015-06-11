import React, { Component } from 'react';

export default class ShareSocial extends Component {
	render() {
		return (
			<span className="share-social">
				<a href="javascript://" title="Share on Twitter"><i className="icon-twitter"></i></a>
				<a href="javascript://" title="Share on Facebook"><i className="icon-facebook"></i></a>
				<a href="javascript://" title="Share on Google+"><i className="icon-google-plus"></i></a>
			</span>
		);
	}
};
