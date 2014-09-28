/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	render: function () {
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum lacus ut ultricies convallis. Phasellus egestas, augue a gravida accumsan, tortor lacus blandit dolor, eget euismod leo elit vel tellus. Aenean nec diam ornare orci condimentum mollis. Phasellus in libero quis mi malesuada suscipit sit amet eget eros. Sed a mi pharetra, dapibus enim a, posuere ex. Quisque vel dignissim turpis. Sed sed magna tempus, aliquet massa id, sodales elit. Duis quis elementum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices dignissim tellus at ultrices. Ut sit amet odio in velit placerat tempus eget scelerisque tellus. Fusce libero libero, maximus vitae posuere et, mollis ut sem. Aenean tincidunt urna et placerat porta. Etiam malesuada odio sed orci blandit tincidunt. Pellentesque imperdiet molestie risus, vel tincidunt nulla dictum et. In hac habitasse platea dictumst.</p>
					<p>Morbi enim nisi, consectetur ac massa in, eleifend sodales ipsum. Praesent fringilla sem vel felis commodo, nec tincidunt neque viverra. Quisque molestie, orci at scelerisque accumsan, purus odio eleifend eros, quis tempus urna lorem sed ex. Phasellus a lorem nec nisi efficitur consequat. Nulla finibus faucibus ultricies. Pellentesque nec quam elementum, mollis augue nec, venenatis velit. Etiam mattis felis quis aliquet vulputate. Nunc at massa vitae ipsum egestas sagittis nec et justo.</p>
					<p>Duis efficitur vitae ipsum at pellentesque. Aenean congue diam at dictum volutpat. Fusce velit odio, fringilla sed velit ut, aliquam iaculis justo. Maecenas rhoncus, nisi ut consectetur aliquam, ipsum elit placerat nibh, sed blandit magna velit eu mi. Pellentesque varius consequat ultricies. Vestibulum convallis efficitur vehicula. Suspendisse tristique sed nulla et malesuada. Phasellus mollis et arcu a molestie. Duis laoreet sagittis gravida. Mauris non justo vel elit cursus porta eget at nibh. Mauris mattis pellentesque justo, ac fringilla ante congue egestas. Maecenas condimentum sit amet purus vel vulputate.</p>
					<p>Praesent posuere lorem viverra, sollicitudin sem luctus, faucibus elit. Maecenas et arcu dolor. Vestibulum aliquam orci nec viverra scelerisque. Curabitur sit amet arcu at ex rutrum ullamcorper. Vivamus condimentum congue elit et varius. Donec sit amet tincidunt massa. Quisque vel augue nunc. Suspendisse molestie suscipit porttitor. Cras congue nunc ut suscipit bibendum. Duis hendrerit posuere augue sit amet aliquam. In fermentum enim ut purus porttitor, ut ultrices enim ultrices. Sed vitae sapien condimentum, semper neque in, pellentesque velit. Donec a erat eu elit ultricies maximus. Mauris faucibus commodo mauris ut hendrerit. Vestibulum tincidunt ullamcorper condimentum. Sed consequat tellus lectus, sed ornare massa dapibus a.</p>
					<p>Donec non sem ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac porta lectus. Phasellus mauris arcu, pretium sed ex vel, varius pellentesque elit. Morbi sollicitudin gravida est sed consectetur. Sed ut ex ligula. Nullam dapibus placerat velit vel cursus. Suspendisse ut ligula eleifend, rhoncus nisi a, luctus velit. Sed sed auctor nulla, ut dignissim sapien. Nullam eu malesuada ligula. Quisque vehicula orci a cursus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi quam, convallis quis condimentum sit amet, faucibus in justo. Integer nulla tellus, porta eu sollicitudin sit amet, iaculis sit amet libero. Nunc a pulvinar arcu.</p>
				</section>
				<footer>
					<h2>
						<a href="/blog/another">Read Next: Some other Article</a>
					</h2>
				</footer>
			</article>
		);
	}
});
