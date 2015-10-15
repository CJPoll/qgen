import Reflux from 'reflux';
import $ from 'jquery';
import history from 'app/javascripts/history';
import _ from 'lodash';
import addAuthentictyToken from 'app/javascripts/helpers/addAuthenticityToken';

import NotificationsActions from 'app/javascripts/actions/notificationsActions';

import authToken from 'app/javascripts/helpers/addAuthenticityToken';

var CampaignActions;

CampaignActions = Reflux.createActions({
	load: {asyncResult: true},
	addPlayer: {asyncResult: false},
	changeName: {asyncResult: false, sync: true},
	create: {asyncResult: true},
	edit: {asyncResult: true},
	clear: {asyncResult: false}
});

CampaignActions.load.listen(function(campaignId) {
	var data, url;

	url = '/api/campaigns/' + campaignId;

	data = {
		dataType: 'json'
	}

	$.get(url, data)
		.then(this.completed)
		.then(this.failed);
});

CampaignActions.edit.listen(function(campaign) {
	var data, url;

	data = {
		campaign: campaign,
		_method: 'PUT',
		dataType: 'json'
	};

	data = authToken(data);

	url = '/api/campaigns/' + campaign.id;

	$.post(url, data)
		.then(function() {
			var nextUrl;

			nextUrl = '/campaigns/' + campaign.id;
			history.pushState(null, nextUrl);

			NotificationsActions.addSuccess({message: 'You successfully edited ' + campaign.name});
		})
		.fail(function(response) {
			if (response.status === 401) {
				NotificationsActions.addError({message: 'You can\'t edit this campaign'});
			}
		});
});

CampaignActions.create.listen(function(campaign) {
		var data, url;

		url = '/api/campaigns';
		data = {
			campaign: {
				name: campaign.name
			},

			players: _.map(campaign.players, player => player.id)
		};

		data = addAuthentictyToken(data);

		$.post(url, data)
			.then(function(response) {
				history.pushState(null, '/campaigns/' + response.id)
			});
});

export default CampaignActions;
