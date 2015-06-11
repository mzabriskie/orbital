import React, { Component } from 'react';
import Disqus from 'react-disqus-thread';
import marked from 'marked';
import moment from 'moment';
import config from '../config/config';
import ShareSocial from '../components/ShareSocial';
const AVG_WORDS_MINUTE = 250;

marked.setOptions({
	highlight: function (code) {
		return require('highlight.js').highlightAuto(code).value;
	}
});

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsVisible: false
    };
  }

	handleCommentsClick () {
		this.setState({
			commentsVisible: !this.state.commentsVisible
		});
	}

	render () {
		var markdown = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum lacus ut ultricies convallis. Phasellus egestas, augue a gravida accumsan, tortor lacus blandit dolor, eget euismod leo elit vel tellus. Aenean nec diam ornare orci condimentum mollis. Phasellus in libero quis mi malesuada suscipit sit amet eget eros. Sed a mi pharetra, dapibus enim a, posuere ex. Quisque vel dignissim turpis. Sed sed magna tempus, aliquet massa id, sodales elit. Duis quis elementum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices dignissim tellus at ultrices. Ut sit amet odio in velit placerat tempus eget scelerisque tellus. Fusce libero libero, maximus vitae posuere et, mollis ut sem. Aenean tincidunt urna et placerat porta. Etiam malesuada odio sed orci blandit tincidunt. Pellentesque imperdiet molestie risus, vel tincidunt nulla dictum et. In hac habitasse platea dictumst.\n\n' +
		'## Header\n\n' +
		'Morbi enim nisi, consectetur ac massa in, eleifend sodales ipsum. Praesent fringilla sem vel felis commodo, nec tincidunt neque viverra. Quisque molestie, orci at scelerisque accumsan, purus odio eleifend eros, quis tempus urna lorem sed ex. Phasellus a lorem nec nisi efficitur consequat. Nulla finibus faucibus ultricies. Pellentesque nec quam elementum, mollis augue nec, venenatis velit. Etiam mattis felis quis aliquet vulputate. Nunc at massa vitae ipsum egestas sagittis nec et justo.\n\n' +
		'## Header\n\n' +
		'Duis efficitur vitae ipsum at pellentesque. Aenean congue diam at dictum volutpat. Fusce velit odio, fringilla sed velit ut, aliquam iaculis justo. Maecenas rhoncus, nisi ut consectetur aliquam, ipsum elit placerat nibh, sed blandit magna velit eu mi. Pellentesque varius consequat ultricies. Vestibulum convallis efficitur vehicula. Suspendisse tristique sed nulla et malesuada. Phasellus mollis et arcu a molestie. Duis laoreet sagittis gravida. Mauris non justo vel elit cursus porta eget at nibh. Mauris mattis pellentesque justo, ac fringilla ante congue egestas. Maecenas condimentum sit amet purus vel vulputate.\n\n' +
		'## Header\n\n' +
		'Praesent posuere lorem viverra, sollicitudin sem luctus, faucibus elit. Maecenas et arcu dolor. Vestibulum aliquam orci nec viverra scelerisque. Curabitur sit amet arcu at ex rutrum ullamcorper. Vivamus condimentum congue elit et varius. Donec sit amet tincidunt massa. Quisque vel augue nunc. Suspendisse molestie suscipit porttitor. Cras congue nunc ut suscipit bibendum. Duis hendrerit posuere augue sit amet aliquam. In fermentum enim ut purus porttitor, ut ultrices enim ultrices. Sed vitae sapien condimentum, semper neque in, pellentesque velit. Donec a erat eu elit ultricies maximus. Mauris faucibus commodo mauris ut hendrerit. Vestibulum tincidunt ullamcorper condimentum. Sed consequat tellus lectus, sed ornare massa dapibus a.\n\n' +
		'## Header\n\n' +
		'Donec non sem ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac porta lectus. Phasellus mauris arcu, pretium sed ex vel, varius pellentesque elit. Morbi sollicitudin gravida est sed consectetur. Sed ut ex ligula. Nullam dapibus placerat velit vel cursus. Suspendisse ut ligula eleifend, rhoncus nisi a, luctus velit. Sed sed auctor nulla, ut dignissim sapien. Nullam eu malesuada ligula. Quisque vehicula orci a cursus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi quam, convallis quis condimentum sit amet, faucibus in justo. Integer nulla tellus, porta eu sollicitudin sit amet, iaculis sit amet libero. Nunc a pulvinar arcu.\n\n' +
		'This is a sentance that has `code` in the middle.\n\n' +
		'<table><thead><tr><th>F</th><th>B</th></tr></thead><tbody>' +
		'<tr><td>foo</td><td>boo</td></tr>' +
		'<tr><td>far</td><td>bar</td></tr>' +
		'<tr><td>fart</td><td>bart</td></tr>' +
		'</tbody></table>\n\n' +
		'```js\n' +
		'/** @jsx React.DOM */\n' +
		'var React = require(\'react\');\n\n' +
		'var App = React.createClass({\n' +
			'\trender: function () {\n' +
				'\t\tvar index = 0;\n' +
				'\t\tvar children = React.Children.map(this.props.children, function (child) {\n' +
					'\t\t\treturn React.addons.cloneWithProps(child, {\n' +
						'\t\t\t\tref: \'child-\' + (index++)\n' +
					'\t\t\t});\n' +
				'\t\t});\n\n' +
				'\t\treturn (\n' +
					'\t\t\t<div>\n' +
							'\t\t\t\t{children}\n' +
					'\t\t\t</div>\n' +
				'\t\t);\n' +
			'\t}\n' +
		'});\n\n' +
		'React.renderComponent(<App/>, document.body);' +
		'```\n\n' +
		'```js\n' +
		'var PI = 3.14159265359;\n' +
		'var firstName = \'Fred\'\n' +
		'var lastName = \'Flintstone\'\n' +
		'```\n\n' +
		'- A\n- B\n- C';
		var markup = marked(markdown);
		var publishDate = moment().format('MMM D, YYYY');
		var readingTime = Math.round(markdown.split(' ').length / AVG_WORDS_MINUTE);
		var disqusClassName = this.state.commentsVisible ? '' : 'hidden';
		var toggleCommentsMessage = this.state.commentsVisible ? 'Hide Comments' : 'View Comments';

		return (
			<article role="main">
				<header>
					<h1>My Article</h1>
					<h3>This is where the subheader goes</h3>
					<a href="/"><img src="https://avatars.githubusercontent.com/u/199035?s=150"/></a>
					<div>
						<a href="/">Matt Zabriskie</a>
					</div>
				</header>
				<section>
					<div className="article-meta">
						<span><i className="icon-calendar"></i>{publishDate}</span>
						<span><i className="icon-time"></i>{readingTime} minute read</span>
						<ShareSocial/>
					</div>
				</section>
				<section className="markdown-body" dangerouslySetInnerHTML={{__html: markup}}/>
				<section>
					<div className="article-meta">
						<span>
              <a href="javascript://" onClick={this.handleCommentsClick.bind(this)}>
                <i className="icon-comment"></i>{' '}
                {toggleCommentsMessage}
              </a>
            </span>
						<ShareSocial/>
					</div>
					<Disqus className={disqusClassName} shortname={config.disqus.shortname} identifier="orbit-example" title="My Article"/>
				</section>
				<footer>
					<h2>
						<a href="/blog/another">Read Next: Some other Article</a>
					</h2>
				</footer>
			</article>
		);
	}
};
