import React from 'react';
import {Route} from 'react-router';
import Navigation from './containers/navigation';
import Formation from './components/formation';
import NotFound from './components/not-found';

export default (
	<Route path="/" component={Navigation}>
		<Route path="/formation" component={Formation} />
		<Route path="*" component={NotFound} />
	</Route>
);
