import React from 'react';
import DeleteButton from './deleteButton';

var DeleteCampaignButton;

DeleteCampaignButton = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object.isRequired
	},

	render() {
		var campaign;

		campaign = this.props.campaign;

		return (
			<DeleteButton url={'/campaigns/' + campaign.id}>
				{this.props.children}
			</DeleteButton>
		);
	}
});

export default DeleteCampaignButton;
