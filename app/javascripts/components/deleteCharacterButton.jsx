import React from 'react';
import DeleteButton from './deleteButton';

var DeleteCharacterButton;

DeleteCharacterButton = React.createClass({
	propTypes: {
		character: React.PropTypes.object.isRequired
	},

	render() {
		var character;

		character = this.props.character;
		return (
			<DeleteButton url={'/characters/' + character.id}>
				<span className="glyphicon glyphicon-trash"></span> Delete
			</DeleteButton>
		);
	}
});

export default DeleteCharacterButton;
