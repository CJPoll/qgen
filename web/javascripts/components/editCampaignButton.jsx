import React from 'react';
import buttonStyles from 'web/stylesheets/buttons.scss';

import { Link } from 'react-router';

var EditCampaignButton;

EditCampaignButton = React.createClass({
	render() {
		var url;

		url = '/campaigns/' + this.props.campaign.id + '/edit';

		return (
			<Link to={url} className={buttonStyles.primaryButton}>
				{this.props.children}
			</Link>
		)
	}
});

export default EditCampaignButton;
