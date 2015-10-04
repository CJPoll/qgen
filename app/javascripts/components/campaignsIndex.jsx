import React from 'react';

import { Panel, PanelTitle, PanelBody } from './panel';
import CampaignsList from './campaignsList';

var CampaignsIndex;

CampaignsIndex = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired
	},

	render() {
		return (
			<Panel>
				<PanelTitle>
					My Campaigns
				</PanelTitle>

				<PanelBody>
					<h2> My Campaigns </h2>

					<CampaignsList campaigns={this.props.campaigns} />

				</PanelBody>
			</Panel>
		);
	}
});

export default CampaignsIndex;
