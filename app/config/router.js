/** @jsx React.DOM */

var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var config = require('./config');

module.exports = (
	<Routes location={config.router.location}>
		<Route name="index" path="/" handler={require('../routes/index')}/>
		<Route name="article" path="/blog/:article" handler={require('../routes/article')}/>
	</Routes>
);
