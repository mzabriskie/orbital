import React from 'react';
import { Route } from 'react-router';
import config from './config';

export default (
	<Route location={config.router.location}>
		<Route name="index" path="/" handler={require('../routes/index')}/>
		<Route name="article" path="/blog/:article" handler={require('../routes/article')}/>
	</Route>
);
