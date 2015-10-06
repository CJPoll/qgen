import React from 'react';
import routes from './components/router';
import history from './history';
import $ from 'jquery';

import BackgroundsActions from './actions/backgroundsActions';
import PowersActions from './actions/powersActions';
import CampaignsActions from './actions/campaignsActions';

import PowersStore from './stores/powersStore';
import BackstoryStore from './stores/backstoryStore';
import NewCharacterStore from './stores/newCharacterStore';
import CampaignsStore from './stores/campaignsStore';

$(document).ready(function() {
	React.render(routes, document.body);
	history.pushState(null, '/characters/new');
	CampaignsActions.load();
	BackgroundsActions.load();
	PowersActions.load();
});
