import React from 'react';

var DeleteCharacterButton;

DeleteCharacterButton = React.createClass({
	propTypes: {
		character: React.PropTypes.object.isRequired
	},

	render() {
		var character;

		character = this.props.character;
		return (
			<a href={'/characters/' + character.id} data-method='delete' className='delete-character'>
				<span className="glyphicon glyphicon-trash"></span> Delete
			</a>
		);
	}
});

export default DeleteCharacterButton;
