import React from 'react';
import history from 'web/javascripts/history';
import { Router, Route, IndexRoute } from 'react-router';
import $ from 'jquery';

import Layout from 'web/javascripts/components/layout';
import Login from 'web/javascripts/components/login';
import SignUp from 'web/javascripts/components/signUp';

window.$ = $;
window.jquery = $;
window.jQuery = $;

var routes = (
	<Router history={history}>
		<Route path='/' component={Layout}>
			<Route path='/users/sign_in' component={Login} />
			<Route path='/users/sign_up' component={SignUp} />
			<Route path='/users/sign_out' compoennt={Login} />
		</Route>
	</Router>
)

$(document).ready(function() {
	React.render(
		routes,
		document.body
	);
});
