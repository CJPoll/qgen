import React from 'react';
import Reflux from 'reflux';

import CharactersStore from 'app/javascripts/stores/charactersStore';
import CharactersList from './charactersList';
import CharactersActions from 'app/javascripts/actions/charactersActions';

var CharactersIndex;

CharactersIndex = React.createClass({
	componentWillMount() {
		CharactersActions.load();
	},

	mixins: [Reflux.connect(CharactersStore, 'characters')],

	render() {
		return (
			<div>
				<h1> Characters </h1>

				<CharactersList characters={this.state.characters} />
			</div>
		);
	}
});

export default CharactersIndex;
