import React from 'react';
import _ from 'lodash';

import SuccessMessage from 'app/javascripts/components/successMessage';
import WarningMessage from 'app/javascripts/components/warningMessage';
import ErrorMessage from 'app/javascripts/components/errorMessage';

var Notifications;

Notifications = React.createClass({
	propTypes: {
		warnings: React.PropTypes.array.isRequired,
		errors: React.PropTypes.array.isRequired,
		successes: React.PropTypes.array.isRequired
	},

	renderSuccesses() {
		return _.map(this.props.successes, success => <SuccessMessage success={success} />);
	},

	renderWarnings() {
		return _.map(this.props.warnings, warning => <WarningMessage warning={warning} />);
	},

	renderErrors() {
		return _.map(this.props.errors, error => <ErrorMessage error={error} />);
	},

	render() {
		return (
			<div>
				{this.renderErrors()}
				{this.renderWarnings()}
				{this.renderSuccesses()}
			</div>
		)
	}
});

export default Notifications;
