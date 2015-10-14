import React from 'react';

import NotificationsActions from 'app/javascripts/actions/notificationsActions';

var WarningMessage;

WarningMessage = React.createClass({
	propTypes: {
		warning: React.PropTypes.object.isRequired
	},

	removeWarning(warning) {
		NotificationsActions.removeWarning(warning);
	},

	render() {
		return (
			<div className='alert alert-warning alert-dismissable' role='alert'>
				<button type='button' className='close' aria-label='close' onClick={this.removeWarning.bind(this, this.props.warning)}>
					<span aria-hidden="true">&times;</span>
				</button>
				{this.props.warning.message}
			</div>
		);
	}
});

export default WarningMessage;
