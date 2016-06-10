import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from '../screens/Home';
import Article from '../screens/Article';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="/articles/:article" component={Article}/>
	</Router>
);
