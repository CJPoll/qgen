import React from 'react';

import CharactersList from './charactersList';

var CharactersIndex;

CharactersIndex = React.createClass({
	propTypes: {
		characters: React.PropTypes.array.isRequired
	},

	render() {
		return (
			<div>
				<h1> Characters </h1>

				<CharactersList characters={this.props.characters} />
			</div>
		);
	}
});

export default CharactersIndex;
