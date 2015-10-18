import React from 'react';
import buttonStyles from 'web/stylesheets/buttons.scss';

var SubmitButton;

SubmitButton = React.createClass({
	getDefaultProps() {
		return {
			value: 'Submit',
			disabled: false
		};
	},

	propTypes: {
		onClick: React.PropTypes.func.isRequired,
		disabled: React.PropTypes.bool,
		value: React.PropTypes.string
	},

	render() {
		return <input type='submit' value={this.props.value} className={buttonStyles.primaryButton} onClick={this.props.onClick} disabled={this.props.disabled} />;
	}
});

export default SubmitButton;
