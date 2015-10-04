import React from 'react';
import LogoutButton from './logout';

var LoginButton;

LoginButton = React.createClass({
	propTypes: {
		userData: React.PropTypes.object
	},

	render() {
		var user = this.props.userData;

		if (user !== null && user !== undefined) {
			return (
				<LogoutButton userData={this.props.userData}/>
			);
		}

		return (
			<a href="/users/sign_in"> Sign In </a>
		);
	}
});

export default LoginButton;
