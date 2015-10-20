import React from 'react';
import _ from 'lodash';

import LogoutButton from './logout';

var LoginButton;

LoginButton = React.createClass({
	propTypes: {
		userData: React.PropTypes.object
	},

	render() {
		var user = this.props.userData;

		if (_.isUndefined(user) || _.isNull(user) || _.isUndefined(user.first_name) || _.isNull(user.first_name)) {
			return (
				<a href="/login"> Sign In </a>
			);
		}

		return (
			<LogoutButton userData={this.props.userData}/>
		);
	}
});

export default LoginButton;
