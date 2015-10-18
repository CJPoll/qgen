import React from 'react';
import Reflux from 'reflux';

import CampaignStore from 'web/javascripts/stores/campaignStore';

import CampaignActions from 'web/javascripts/actions/campaignActions';

import { Panel, PanelTitle, PanelBody } from './panel';
import CampaignForm from 'web/javascripts/components/campaignForm';

var NewCampaign;

NewCampaign = React.createClass({
	mixins: [Reflux.connect(CampaignStore, 'campaign')],

	componentWillMount() {
		CampaignActions.clear();
	},

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
