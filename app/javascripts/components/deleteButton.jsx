import React from 'react';

var DeleteButton;

DeleteButton = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<a href={this.props.url} data-method='delete' className='delete-button'>
				{this.props.children}
			</a>
		);
	}
});

export default DeleteButton;
