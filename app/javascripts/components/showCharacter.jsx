import React from 'react';
import _ from 'lodash';

var ShowCharacter;

ShowCharacter = React.createClass({
	propTypes: {
		character: React.PropTypes.object.isRequired,
		background: React.PropTypes.object.isRequired,
		powers: React.PropTypes.array.isRequired
	},

	renderPowers() {
		var powers = this.props.powers;

		return _.map(powers, power => (
			<li>
				{power.name}
			</li>
		));
	},

	render() {
		var character, fullName;

		character = this.props.character;
		fullName = character.first_name + ' ' + character.last_name;

		return (
			<div>
				<h1>
					{fullName}
				</h1>

				<h2> Background </h2>
				<p> {this.props.background.name} </p>

				<h2> Powers </h2>
				<ul>
					{this.renderPowers()}
				</ul>

				<h2> Backstory </h2>
				<p> {character.backstory} </p>
			</div>
		);
	}
});

export default ShowCharacter;
