import React from 'react';

import NotificationsActions from 'app/javascripts/actions/notificationsActions';

var SuccessMessage;

SuccessMessage = React.createClass({
	propTypes: {
		success: React.PropTypes.object.isRequired
	},

	removeSuccess(success) {
		NotificationsActions.removeSuccess(success);
	},

	render() {
		return (
			<div className='alert alert-success alert-dismissable' role='alert'>
				<button type='button' className='close' aria-label='close' onClick={this.removeSuccess.bind(this, this.props.success)}>
					<span aria-hidden="true">&times;</span>
				</button>
				{this.props.success.message}
			</div>
		);
	}
});

export default SuccessMessage;
