import React from 'react';
import buttonStyles from 'web/stylesheets/buttons.scss';

var DeleteButton;

DeleteButton = React.createClass({
	propTypes: {
		onClick: React.PropTypes.func.isRequired
	},

	onClick(e) {
		e.preventDefault();
		this.props.onClick(e);
	},

	render() {
		return (
			<a href='#' onClick={this.props.onClick} className={buttonStyles.dangerButton}>
				{this.props.children}
			</a>
		);
	}
});

export default DeleteButton;
