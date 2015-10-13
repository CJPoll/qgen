import React from 'react';
import $ from 'jquery';

import QGenNavbar from 'app/javascripts/components/qgenNavbar';
import Router from 'app/javascripts/components/router';

import CampaignsStore from 'app/javascripts/stores/campaignsStore';
import CharactersStore from 'app/javascripts/stores/charactersStore';
import BackgroundsStore from 'app/javascripts/stores/backgroundsStore';
import NewCharacterStore from 'app/javascripts/stores/newCharacterStore';
import PowersStore from 'app/javascripts/stores/powersStore';
import BackstoryStore from 'app/javascripts/stores/backstoryStore';

import CampaignsActions from 'app/javascripts/actions/campaignsActions';
import CharactersActions from 'app/javascripts/actions/charactersActions';
import BackgroundsActions from 'app/javascripts/actions/backgroundsActions';
import PowersActions from 'app/javascripts/actions/powersActions';
import SelfActions from 'app/javascripts/actions/selfActions';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('bootstrap-sass/assets/javascripts/bootstrap.min');

CampaignsActions.load();
CharactersActions.load();
BackgroundsActions.load();
PowersActions.load();
SelfActions.load();

$(document).ready(function() {
	React.render(
		Router,
		document.body
	)
});
