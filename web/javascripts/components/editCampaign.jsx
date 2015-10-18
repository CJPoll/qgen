import React from 'react';
import Reflux from 'reflux';

import CampaignStore from 'web/javascripts/stores/campaignStore';
import CampaignActions from 'web/javascripts/actions/campaignActions';
import { Panel, PanelTitle, PanelBody } from 'web/javascripts/components/panel';
import CampaignForm from 'web/javascripts/components/campaignForm';

var EditCampaign;

EditCampaign = React.createClass({
	mixins: [Reflux.connect(CampaignStore, 'campaign')],

	componentWillMount() {
		CampaignActions.load(this.props.params.campaignId);
	},

	submit(state) {
		CampaignActions.edit(this.state.campaign);
	},

	render() {
		if (!(this.state.campaign.name)) {
			return (
				<Panel>
					<PanelTitle>
						{this.state.campaign.name}
					</PanelTitle>
					<PanelBody>
					</PanelBody>
				</Panel>
			);
		}
		return (
			<Panel>
				<PanelTitle>
					{this.state.campaign.name}
				</PanelTitle>
				<PanelBody>
					<CampaignForm campaign={this.state.campaign} submitAction={this.submit} />
				</PanelBody>
			</Panel>
		);
	}
});

export default EditCampaign;
