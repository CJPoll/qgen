import React from 'react';

var CreateCampaignButton;

CreateCampaignButton = React.createClass({
	render() {
		return (
			<a href='/campaigns/new' className='create-campaign'>
				<span className="glyphicon glyphicon-plus"></span>
				&nbsp;
				Create Campaign
			</a>
		);
	}
});

export default CreateCampaignButton;
