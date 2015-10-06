import React from 'react';
import _ from 'lodash';

import { Panel, PanelTitle, PanelBody } from './panel';
import ButtonGroup from './buttonGroup';
import ButtonToolbar from './buttonToolbar';
import DeleteCharacterButton from './deleteCharacterButton';

var ShowCharacter;

ShowCharacter = React.createClass({
	propTypes: {
		character: React.PropTypes.object.isRequired,
		background: React.PropTypes.object.isRequired,
		powers: React.PropTypes.array.isRequired,
		deleteable: React.PropTypes.bool.isRequired
	},

	renderPowers() {
		var powers = this.props.powers;

		return _.map(powers, power => {
			var key = 'power_' + power.id;
			return (
				<li key={key}>
					{power.name}
				</li>
			);
		});
	},

	render() {
		var character, fullName, deleteButton;

		character = this.props.character;
		fullName = character.first_name + ' ' + character.last_name;

		if (this.props.deleteable) {
			deleteButton = (
				<ButtonToolbar>
					<ButtonGroup>
						<DeleteCharacterButton character={character} />
					</ButtonGroup>
				</ButtonToolbar>
			);
		} else {
			deleteButton = <div></div>;
		}

		return (
			<Panel>
				<PanelTitle>
					{fullName}
				</PanelTitle>

				<PanelBody>
					{deleteButton}

					<h2> Background </h2>
					<p> {this.props.background.name} </p>

					<h2> Powers </h2>
					<ul>
						{this.renderPowers()}
					</ul>

					<h2> Backstory </h2>
					<p> {character.backstory} </p>
				</PanelBody>
			</Panel>
		);
	}
});

export default ShowCharacter;
