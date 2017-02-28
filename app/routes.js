import React from 'react';
import {Route} from 'react-router';
import Navigation from './containers/skeleton/navigation';
import Formation from './components/pages/formation';
import NotFound from './components/pages/not-found';

export default (
	<Route path="/" component={Navigation}>
		<Route path="/formation" component={Formation} />
		<Route path="*" component={NotFound} />
	</Route>
);
