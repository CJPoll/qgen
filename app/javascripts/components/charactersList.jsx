import React from 'react';
import _ from 'lodash';

import { Panel, PanelTitle, PanelBody } from './panel';

var CharactersList;

CharactersList = React.createClass({
	proptypes: {
		characters: React.PropTypes.array.isRequired
	},

	handleClick(character) {
		var url;

		url = '/characters/' + character.id;
		window.location = url;
	},

	renderCharacters() {
		var characters;

		characters = this.props.characters;

		if (characters.length > 0) {
			return _.map(characters, character => (
				<div className='tiled clickable' key={'character_' + character.id} onClick={this.handleClick.bind(this, character)}>
					<Panel>
						<PanelTitle>
							{character.first_name} {character.last_name}
						</PanelTitle>
						<PanelBody>
							{character.backstory}
						</PanelBody>
					</Panel>
				</div>
			));
		} else {
			return <p> No characters yet! </p>;
		}
	},

	render() {
		return (
			<div>
				{this.renderCharacters()}
			</div>
		);
	}
});

export default CharactersList;
