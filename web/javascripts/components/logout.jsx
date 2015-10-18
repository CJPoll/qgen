import React from 'react';
import addAuthenticityToken from 'web/javascripts/helpers/addAuthenticityToken';

var LogoutButton;

LogoutButton = React.createClass({
	propTypes: {
		userData: React.PropTypes.object.isRequired
	},

	handleClick(e) {
		var data, url;

		url = '/api/users/sign_out';

		data = {
			_method: 'delete',
			dataType: 'json'
		};

		data = addAuthenticityToken(data);

		$.post(url, data)
			.then(function() {
				window.location = '/users/sign_in';
			});
	},

	render: function() {
		return (
			<a href='#' onClick={this.handleClick}> Sign Out ({this.props.userData.first_name} {this.props.userData.last_name}) </a>
		);
	}
});

export default LogoutButton;
