import React from 'react';
import history from 'app/javascripts/history';
import { Router, Route, IndexRoute } from 'react-router';
import $ from 'jquery';

import Layout from 'app/javascripts/components/layout';
import Login from 'app/javascripts/components/login';
import SignUp from 'app/javascripts/components/signUp';

window.$ = $;
window.jquery = $;
window.jQuery = $;

var routes = (
	<Router history={history}>
		<Route path='/' component={Layout}>
			<Route path='/users/sign_in' component={Login} />
			<Route path='/users/sign_up' component={SignUp} />
		</Route>
	</Router>
)

$(document).ready(function() {
	React.render(
		routes,
		document.body
	);
});
