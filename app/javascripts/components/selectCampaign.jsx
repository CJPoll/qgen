import React from 'react';
import _ from 'lodash';
import CharacterActions from '../actions/characterActions';

var SelectCampaign;

SelectCampaign = React.createClass({
	renderCampaigns() {
		return _.map(this.props.campaigns, campaign => (
			<option value={campaign.id} key={'campaign_' + campaign.id}>
				{ campaign.name }
			</option>
		));
	},

	handleChange(e) {
		var campaignId = e.target.value;
		CharacterActions.selectCampaign(campaignId);
	},

	render() {
		return (
			<select className='select-box' onChange={this.handleChange}>
				{this.renderCampaigns()}
			</select>
		);
	}
});

export default SelectCampaign;
