import React from 'react';
import routes from './components/router';
import history from './history';
import $ from 'jquery';

import BackgroundsActions from './actions/backgroundsActions';
import PowersActions from './actions/powersActions';

import PowersStore from './stores/powersStore';
import BackstoryStore from './stores/backstoryStore';
import NewCharacterStore from './stores/newCharacterStore';

$(document).ready(function() {
	React.render(routes, document.body);
	history.pushState(null, '/characters/new');
	BackgroundsActions.load();
	PowersActions.load();
});
