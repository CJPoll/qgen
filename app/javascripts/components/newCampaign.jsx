import React from 'react';
import _ from 'lodash';
import addAuthentictyToken from 'app/javascripts/helpers/addAuthenticityToken';
import history from 'app/javascripts/history';

import { Panel, PanelTitle, PanelBody } from './panel';

import CampaignForm from 'app/javascripts/components/campaignForm';

var NewCampaign;

NewCampaign = React.createClass({
	submit(state) {
		var data, url;

		url = '/api/campaigns';
		data = {
			campaign: {
				name: state.name
			},

			players: _.map(state.players, player => player.id)
		};

		data = addAuthentictyToken(data);

		$.post(url, data)
			.then(function(response) {
				history.pushState(null, '/campaigns/' + response.id)
			});
	},

	render() {
		var heading;

		if (this.props.campaign) {
			heading = 'Edit ' + this.props.campaign.name;
		} else {
			heading = 'New Campaign';
		}

		return (
			<Panel>
				<PanelTitle>
					{heading}
				</PanelTitle>
				<PanelBody>
					<CampaignForm submitAction={this.submit} />
				</PanelBody>
			</Panel>
		);
	}
});

export default NewCampaign;
