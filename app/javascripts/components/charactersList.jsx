import React from 'react';
import _ from 'lodash';

var CharactersList;

CharactersList = React.createClass({
	proptypes: {
		characters: React.PropTypes.array.isRequired
	},

	renderCharacters() {
		var characters;

		characters = this.props.characters;

		if (characters.length > 0) {
			return _.map(characters, character => <li>{character.first_name} {character.last_name}</li>);
		} else {
			return <li> No characters yet! </li>;
		}
	},

	render() {
		return (
			<ul>
				{this.renderCharacters()}
			</ul>
		);
	}
});

export default CharactersList;
