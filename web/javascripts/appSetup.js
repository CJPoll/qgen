import $ from 'jquery';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('bootstrap-sass/assets/javascripts/bootstrap.min');

import React from 'react';

import QGenNavbar from 'web/javascripts/components/qgenNavbar';
import Router from 'web/javascripts/components/router';

import CampaignsStore from 'web/javascripts/stores/campaignsStore';
import CharactersStore from 'web/javascripts/stores/charactersStore';
import BackgroundsStore from 'web/javascripts/stores/backgroundsStore';
import NewCharacterStore from 'web/javascripts/stores/newCharacterStore';
import PowersStore from 'web/javascripts/stores/powersStore';
import BackstoryStore from 'web/javascripts/stores/backstoryStore';
import NotificationsStore from 'web/javascripts/stores/notificationsStore';

import SelfActions from 'web/javascripts/actions/selfActions';

SelfActions.load()
.then(function() {
	React.render(
		Router,
		document.body
	);
});
