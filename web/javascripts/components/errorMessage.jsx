import React from 'react';

import NotificationsActions from 'web/javascripts/actions/notificationsActions';

var ErrorMessage;

ErrorMessage = React.createClass({
	propTypes: {
		error: React.PropTypes.object.isRequired
	},

	removeError(error) {
		NotificationsActions.removeError(error);
	},

	render() {
		return (
			<div className='alert alert-danger alert-dismissable' role='alert'>
				<button type='button' className='close' aria-label='close' onClick={this.removeError.bind(this, this.props.error)}>
					<span aria-hidden="true">&times;</span>
				</button>
				{this.props.error.message}
			</div>
		);
	}
});

export default ErrorMessage;
