import React from 'react';
import history from 'web/javascripts/history';
import addAuthenticityToken from 'web/javascripts/helpers/addAuthenticityToken';

import SelfActions from 'web/javascripts/actions/selfActions';

var LogoutButton;

LogoutButton = React.createClass({
	propTypes: {
		userData: React.PropTypes.object.isRequired
	},

	handleClick(e) {
		var data, url;

		url = '/api/logout';

		data = {
			_method: 'delete',
			dataType: 'json'
		};

		data = addAuthenticityToken(data);

		$.post(url, data)
			.then(function() {
				SelfActions.clear();
				history.pushState(null, '/login');
			});
	},

	render: function() {
		return (
			<a href='#' onClick={this.handleClick}> Sign Out ({this.props.userData.first_name} {this.props.userData.last_name}) </a>
		);
	}
});

export default LogoutButton;
