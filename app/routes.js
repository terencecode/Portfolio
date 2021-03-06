import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Formation from './components/pages/formation';
import NotFound from './components/pages/not-found';

export default (
	<Route path="/" component={App}>
		<Route path="/formation" component={Formation} />
		<Route path="*" component={NotFound} />
	</Route>
);
