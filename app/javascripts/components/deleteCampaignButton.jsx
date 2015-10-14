import React from 'react';
import $ from 'jquery';
import history from 'app/javascripts/history';

import NotificationsActions from 'app/javascripts/actions/notificationsActions';

import DeleteButton from './deleteButton';
import addAuthenticityToken from 'app/javascripts/helpers/addAuthenticityToken';

var DeleteCampaignButton;

DeleteCampaignButton = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object.isRequired
	},

	onClick(e) {
		var data, url;

		e.preventDefault();

		url = '/api/campaigns/' + this.props.campaign.id;
		data = {
			dataType: 'json',
			_method: 'delete'
		}

		data = addAuthenticityToken(data);

		$.post(url, data)
			.then(function() {
				history.pushState(null, '/campaigns');

				NotificationsActions.addSuccess({message: 'Successfully deleted ' + this.props.campaign.name})
			}.bind(this))
			.fail(function() {
				NotificationsActions.addError({message: 'Couldn\'t delete ' + this.props.campaign.name})
			}.bind(this));
	},

	render() {
		var campaign;

		campaign = this.props.campaign;

		return (
			<DeleteButton url={'/campaigns/' + campaign.id} onClick={this.onClick}>
				{this.props.children}
			</DeleteButton>
		);
	}
});

export default DeleteCampaignButton;
