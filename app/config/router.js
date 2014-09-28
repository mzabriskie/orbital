/** @jsx React.DOM */

var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

module.exports = (
	<Routes location="history">
		<Route name="index" path="/" handler={require('../routes/index')}/>
		<Route name="article" path="/blog/:article" handler={require('../routes/article')}/>
	</Routes>
);
