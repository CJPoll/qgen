import $ from 'jquery';

import React from 'react';
import QGenNavbar from 'app/javascripts/components/qgenNavbar';
import Router from 'app/javascripts/components/router';

import CampaignsStore from 'app/javascripts/stores/campaignsStore';
import CharactersStore from 'app/javascripts/stores/charactersStore';

import CampaignsActions from 'app/javascripts/actions/campaignsActions';
import CharactersActions from 'app/javascripts/actions/charactersActions';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('bootstrap-sass/assets/javascripts/bootstrap.min');

CampaignsActions.load();
CharactersActions.load();

$(document).ready(function() {
	React.render(
		React.createElement(QGenNavbar),
		document.getElementById('navbar')
	);

	React.render(
		Router,
		document.getElementById('app')
	)
});
