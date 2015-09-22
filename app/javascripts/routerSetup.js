import React from 'react';
import routes from './components/router';
import BackgroundsActions from './actions/backgroundsActions';
import history from './history';

window.$(document).ready(function() {
	React.render(routes, document.body);
	history.pushState(null, '/characters/new');
	BackgroundsActions.load();
});
