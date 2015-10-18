import React from 'react';
import _ from 'lodash';

import generalStyles from 'web/stylesheets/general.scss';

var SelectCampaign;

SelectCampaign = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired,
		initialSelected: React.PropTypes.object,
		onChange: React.PropTypes.func
	},

	renderCampaigns() {
		var campaigns, actualCampaigns;
		
		campaigns = [];

		if (this.props.startBlank) {
			campaigns.push(<option value={0} key='campaign_0' selected='true'> Please choose a campaign </option>);
		}

		actualCampaigns = _.map(this.props.campaigns, campaign => {
			var selected;

			selected = this.props.initialSelected && campaign.id === this.props.initialSelected.id
			return (
				<option value={campaign.id} key={'campaign_' + campaign.id} selected={selected}>
					{ campaign.name }
				</option>
			);
		});

		campaigns = campaigns.concat(actualCampaigns);

		return campaigns;
	},

	render() {
		return (
			<select className={generalStyles.select} onChange={this.props.onChange}>
				{this.renderCampaigns()}
			</select>
		);
	}
});

export default SelectCampaign;
