import React from 'react';
import routes from './components/router';
import history from './history';
import $ from 'jquery';

import BackgroundsActions from './actions/backgroundsActions';
import PowersActions from './actions/powersActions';

import PowersStore from './stores/powersStore';

$(document).ready(function() {
	React.render(routes, document.body);
	history.pushState(null, '/characters/new');
	BackgroundsActions.load();
	PowersActions.load();
});
