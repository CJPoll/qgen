import React from 'react';

var EditCampaignButton;

EditCampaignButton = React.createClass({
	render() {
		var url;

		url = '/campaigns/' + this.props.campaign.id + '/edit';

		return (
			<a href={url} className='edit-campaign'>
				{this.props.children}
			</a>
		)
	}
});

export default EditCampaignButton;
