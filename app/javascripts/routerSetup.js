import React from 'react';
import routes from './components/router';
import BackgroundsActions from './actions/backgroundsActions';

window.$(document).ready(function() {
	React.render(routes, document.body);
	BackgroundsActions.load();
});
