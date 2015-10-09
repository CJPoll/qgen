import React from 'react';
import _ from 'lodash';
import CharacterActions from '../actions/characterActions';

var SelectCampaign;

SelectCampaign = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired,
		initialSelected: React.PropTypes.object,
		onChange: React.PropTypes.func
	},

	renderCampaigns() {
		return _.map(this.props.campaigns, campaign => {
			var selected;

			selected = this.props.initialSelected && campaign.id === this.props.initialSelected.id
			return (
				<option value={campaign.id} key={'campaign_' + campaign.id} selected={selected}>
					{ campaign.name }
				</option>
			);
		});
	},

	render() {
		return (
			<select className='select-box' onChange={this.props.onChange}>
				{this.renderCampaigns()}
			</select>
		);
	}
});

export default SelectCampaign;
