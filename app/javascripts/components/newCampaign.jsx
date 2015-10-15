import React from 'react';
import Reflux from 'reflux';

import CampaignStore from 'app/javascripts/stores/campaignStore';

import CampaignActions from 'app/javascripts/actions/campaignActions';

import { Panel, PanelTitle, PanelBody } from './panel';
import CampaignForm from 'app/javascripts/components/campaignForm';

var NewCampaign;

NewCampaign = React.createClass({
	mixins: [Reflux.connect(CampaignStore, 'campaign')],

	submit() {
		CampaignActions.create(this.state.campaign);
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
					<CampaignForm campaign={this.state.campaign} submitAction={this.submit} />
				</PanelBody>
			</Panel>
		);
	}
});

export default NewCampaign;
