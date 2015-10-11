import React from 'react';
import buttonStyles from 'app/stylesheets/buttons.scss';

var SubmitButton;

SubmitButton = React.createClass({
	render() {
		return <input type='submit' className={buttonStyles.primaryButton} onClick={this.props.onClick} />;
	}
});

export default SubmitButton;
