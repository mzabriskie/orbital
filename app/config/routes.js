import React from 'react';
import { Router, Route } from 'react-router';
import Home from '../screens/Home';
import Article from '../screens/Article';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

export default (
	<Router history={history}>
		<Route path="/" component={Home}/>
		<Route path="/articles/:article" component={Article}/>
	</Router>
);
