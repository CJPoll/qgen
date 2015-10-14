import React from 'react';
import buttonStyles from 'app/stylesheets/buttons.scss';

var DeleteButton;

DeleteButton = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired
	},

	render() {
		return (
			<a href={this.props.url} onClick={this.props.onClick} className={buttonStyles.dangerButton}>
				{this.props.children}
			</a>
		);
	}
});

export default DeleteButton;
