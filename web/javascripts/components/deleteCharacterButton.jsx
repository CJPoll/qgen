import React from 'react';

import CharacterActions from 'web/javascripts/actions/characterActions';

import DeleteButton from 'web/javascripts/components/deleteButton';

var DeleteCharacterButton;

DeleteCharacterButton = React.createClass({
	propTypes: {
		character: React.PropTypes.object.isRequired
	},

	deleteCharacter() {
		CharacterActions.delete(this.props.character);
	},

	render() {
		var character;

		character = this.props.character;
		return (
			<DeleteButton url={'/characters/' + character.id} onClick={this.deleteCharacter}>
				<span className="glyphicon glyphicon-trash"></span> Delete
			</DeleteButton>
		);
	}
});

export default DeleteCharacterButton;
