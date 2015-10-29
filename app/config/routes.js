import React from 'react';
import { Router, Route } from 'react-router';
import Home from '../screens/Home';
import Article from '../screens/Article';
import config from './config';

export default (
	<Router location={config.router.location}>
		<Route name="index" path="/" component={Home}/>
		<Route name="article" path="/blog/:article" component={Article}/>
	</Router>
);
