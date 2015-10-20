import React from 'react';
import Reflux from 'reflux';

import CampaignsStore from 'web/javascripts/stores/campaignsStore';

import CampaignActions from 'web/javascripts/actions/campaignsActions';
import requireLogin from 'web/javascripts/mixins/requireLogin';

import { Panel, PanelTitle, PanelBody } from './panel';
import CampaignsList from './campaignsList';

var CampaignsIndex;

CampaignsIndex = React.createClass({
	mixins: [
		Reflux.connect(CampaignsStore, 'campaigns'),
		requireLogin
	],

	componentDidMount() {
		CampaignActions.load();
	},

	render() {
		return (
			<Panel>
				<PanelTitle>
					My Campaigns
				</PanelTitle>

				<PanelBody>
					<h2> My Campaigns </h2>

					<CampaignsList campaigns={this.state.campaigns} />

				</PanelBody>
			</Panel>
		);
	}
});

export default CampaignsIndex;
