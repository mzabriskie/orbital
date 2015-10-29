import React, { Component } from 'react';
import Disqus from 'react-disqus-thread';
import marked from 'marked';
import moment from 'moment';
import config from '../../config/config';
import ShareSocial from './components/ShareSocial';
import Footer from 'shared/components/Footer';
const AVG_WORDS_MINUTE = 250;

const MARKDOWN = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum lacus ut ultricies convallis. Phasellus egestas, augue a gravida accumsan, tortor lacus blandit dolor, eget euismod leo elit vel tellus. Aenean nec diam ornare orci condimentum mollis. Phasellus in libero quis mi malesuada suscipit sit amet eget eros. Sed a mi pharetra, dapibus enim a, posuere ex. Quisque vel dignissim turpis. Sed sed magna tempus, aliquet massa id, sodales elit. Duis quis elementum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices dignissim tellus at ultrices. Ut sit amet odio in velit placerat tempus eget scelerisque tellus. Fusce libero libero, maximus vitae posuere et, mollis ut sem. Aenean tincidunt urna et placerat porta. Etiam malesuada odio sed orci blandit tincidunt. Pellentesque imperdiet molestie risus, vel tincidunt nulla dictum et. In hac habitasse platea dictumst.\n\n' +
		'## Header\n\n' +
		'Morbi enim nisi, consectetur ac massa in, eleifend sodales ipsum. Praesent fringilla sem vel felis commodo, nec tincidunt neque viverra. Quisque molestie, orci at scelerisque accumsan, purus odio eleifend eros, quis tempus urna lorem sed ex. Phasellus a lorem nec nisi efficitur consequat. Nulla finibus faucibus ultricies. Pellentesque nec quam elementum, mollis augue nec, venenatis velit. Etiam mattis felis quis aliquet vulputate. Nunc at massa vitae ipsum egestas sagittis nec et justo.\n\n' +
		'## Header\n\n' +
		'Duis efficitur vitae ipsum at pellentesque. Aenean congue diam at dictum volutpat. Fusce velit odio, fringilla sed velit ut, aliquam iaculis justo. Maecenas rhoncus, nisi ut consectetur aliquam, ipsum elit placerat nibh, sed blandit magna velit eu mi. Pellentesque varius consequat ultricies. Vestibulum convallis efficitur vehicula. Suspendisse tristique sed nulla et malesuada. Phasellus mollis et arcu a molestie. Duis laoreet sagittis gravida. Mauris non justo vel elit cursus porta eget at nibh. Mauris mattis pellentesque justo, ac fringilla ante congue egestas. Maecenas condimentum sit amet purus vel vulputate.\n\n' +
		'## Header\n\n' +
		'Praesent posuere lorem viverra, sollicitudin sem luctus, faucibus elit. Maecenas et arcu dolor. Vestibulum aliquam orci nec viverra scelerisque. Curabitur sit amet arcu at ex rutrum ullamcorper. Vivamus condimentum congue elit et varius. Donec sit amet tincidunt massa. Quisque vel augue nunc. Suspendisse molestie suscipit porttitor. Cras congue nunc ut suscipit bibendum. Duis hendrerit posuere augue sit amet aliquam. In fermentum enim ut purus porttitor, ut ultrices enim ultrices. Sed vitae sapien condimentum, semper neque in, pellentesque velit. Donec a erat eu elit ultricies maximus. Mauris faucibus commodo mauris ut hendrerit. Vestibulum tincidunt ullamcorper condimentum. Sed consequat tellus lectus, sed ornare massa dapibus a.\n\n' +
		'## Header\n\n' +
		'Donec non sem ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac porta lectus. Phasellus mauris arcu, pretium sed ex vel, varius pellentesque elit. Morbi sollicitudin gravida est sed consectetur. Sed ut ex ligula. Nullam dapibus placerat velit vel cursus. Suspendisse ut ligula eleifend, rhoncus nisi a, luctus velit. Sed sed auctor nulla, ut dignissim sapien. Nullam eu malesuada ligula. Quisque vehicula orci a cursus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi quam, convallis quis condimentum sit amet, faucibus in justo. Integer nulla tellus, porta eu sollicitudin sit amet, iaculis sit amet libero. Nunc a pulvinar arcu.\n\n' +
		'This is a sentance that has `code` in the middle.\n\n' +
    '<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">I made a thing: <a href="https://t.co/THORs8ZtKb">https://t.co/THORs8ZtKb</a></p>&mdash; Matt Zabriskie (@mzabriskie) <a href="https://twitter.com/mzabriskie/status/658737202550079488">October 26, 2015</a></blockquote>' +
		'<table><thead><tr><th>F</th><th>B</th></tr></thead><tbody>' +
		'<tr><td>foo</td><td>boo</td></tr>' +
		'<tr><td>far</td><td>bar</td></tr>' +
		'<tr><td>fart</td><td>bart</td></tr>' +
		'</tbody></table>\n\n' +
		'```js\n' +
		'import React from \'react\';\n\n' +
		'const App = React.createClass({\n' +
    '  render() {\n' +
		'    let index = 0;\n' +
		'    const children = React.Children.map(this.props.children, (child) => {\n' +
		'      return React.addons.cloneWithProps(child, {\n' +
		'        ref: \'child-\' + (index++)\n' +
		'      });\n' +
		'    });\n\n' +
		'    return (\n' +
		'      <div>\n' +
		'        {children}\n' +
		'      </div>\n' +
		'    );\n' +
		'  }\n' +
		'});\n\n' +
		'ReactDOM.render(<App/>, document.getElementById(\'container\'));' +
		'```\n\n' +
		'```js\n' +
		'var PI = 3.14159265359;\n' +
		'var firstName = \'Fred\'\n' +
		'var lastName = \'Flintstone\'\n' +
		'```\n\n' +
		'- A\n- B\n- C';

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

  componentDidMount() {
    // Support for injecting Twitter widgets
    var script = this.__twitterScript = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = '//platform.twitter.com/widgets.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  componentWillUnmount() {
    var script = this.__twitterScript;
    script.parentNode.removeChild(script);
  }

	handleCommentsClick () {
		this.setState({
			commentsVisible: !this.state.commentsVisible
		});
	}

	render () {
		var markup = marked(MARKDOWN);
		var publishDate = moment().format('MMM D, YYYY');
		var readingTime = Math.round(MARKDOWN.split(' ').length / AVG_WORDS_MINUTE);
		var disqusClassName = this.state.commentsVisible ? '' : 'hidden';
		var toggleCommentsMessage = this.state.commentsVisible ? 'Hide Comments' : 'View Comments';

		return (
			<article role="main" className="Article">
				<header className="Article__Header">
					<h1>My Article</h1>
					<h3>This is where the subheader goes</h3>
					<a href="/"><img className="Article__Avatar" src="https://avatars.githubusercontent.com/u/199035?s=150"/></a>
					<div>
						<a href="/">Matt Zabriskie</a>
					</div>
				</header>
        <div className="content-wrapper">
          <section>
            <div className="Article__Meta">
              <span><i className="icon-calendar"></i>{publishDate}</span>
              <span><i className="icon-time"></i>{readingTime} minute read</span>
              <ShareSocial/>
            </div>
          </section>
          <section className="Article__Markdown" dangerouslySetInnerHTML={{__html: markup}}/>
          <section>
            <div className="Article__Meta">
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
        </div>
				<footer className="Article__Footer">
					<h2>
						<a href="/articles/another">Read Next: Some other Article</a>
					</h2>
          <Footer/>
				</footer>
			</article>
		);
	}
};
