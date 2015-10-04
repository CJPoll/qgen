import React from 'react';
import _ from 'lodash';

import Panel from './panel';
import PanelBody from './panelBody';
import PanelTitle from './panelTitle';

var CampaignsIndex;

CampaignsIndex = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired
	},

	renderCampaigns() {
		var campaigns;

		campaigns = this.props.campaigns;
		return _.map(campaigns, campaign => {
			var url, name;

			url = '/campaigns/' + campaign.id;
			name = campaign.name;

			return (
				<li>
					<a href={url}>
						{ name }
					</a>
				</li>
			);
		});
	},

	render() {
		return (
			<Panel>
				<PanelTitle>
					My Campaigns
				</PanelTitle>

				<PanelBody>
					<h2> My Campaigns </h2>

					<ul>
						{this.renderCampaigns()}
					</ul>
				</PanelBody>
			</Panel>
		);
	}
});

export default CampaignsIndex;
