import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
	render() {
		var articles = [];
		for (var i=0; i<10; i++) {
			articles.push(
				<li key={i}>
					<time>Sep 27, 2014</time>
					<h2><Link to="/blog/article-title">Article Title</Link></h2>
					<h3>Subtitle for the article</h3>
				</li>
			);
		}

		return (
			<div role="main">
				<header>
					<img src="https://avatars.githubusercontent.com/u/199035?s=150"/>
					<h1>Matt Zabriskie</h1>
				</header>
				<section>
					<ul>{articles}</ul>
				</section>
				<footer>
				</footer>
			</div>
		);
	}
};
