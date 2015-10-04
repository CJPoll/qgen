import React from 'react';

var LogoutButton;

LogoutButton = React.createClass({
	propTypes: {
		userData: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<a href="/users/sign_out" data-method="delete"> Sign Out ({this.props.userData.first_name} {this.props.userData.last_name}) </a>
		);
	}
});

export default LogoutButton;
