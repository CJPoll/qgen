import React from 'react';
import buttonStyles from 'web/stylesheets/buttons.scss';

var CreateCampaignButton;

CreateCampaignButton = React.createClass({
	render() {
		return (
			<a href='/campaigns/new' className={buttonStyles.primaryButton}>
				<span className="glyphicon glyphicon-plus"></span>
				&nbsp;
				Create Campaign
			</a>
		);
	}
});

export default CreateCampaignButton;
