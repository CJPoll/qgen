import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

var CampaignsList;

CampaignsList = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired
	},

	renderCampaigns() {

		if (this.props.campaigns.length > 0) {
			return _.map(this.props.campaigns, campaign => {
				var url, name, key;

				url = '/campaigns/' + campaign.id;
				name = campaign.name;
				key = 'campaign_' + campaign.id;

				return (
					<li key={key}>
						<Link to={url}>
							{ name }
						</Link>
					</li>
				);
			});
		} else {
			return <li> No campaigns yet! </li>;
		}
	},

	render() {
		return (
			<ul>
				{this.renderCampaigns()}
			</ul>
		);
	}
});

export default CampaignsList;
