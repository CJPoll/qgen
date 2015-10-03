import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';

import BackgroundsStore from '../stores/backgroundsStore';
import PowersStore from '../stores/powersStore';
import BackstoryStore from '../stores/backstoryStore';

import ConfirmCharacter from './confirmCharacterButton';

var CharacterConfirmationPage;

CharacterConfirmationPage = React.createClass({
	mixins: [Reflux.connect(BackstoryStore, 'backstory')],

	renderPowers(powers) {
		return _.map(powers, power => (
			<p key={'power' + power.id}> {power.name} (<Link to='/characters/new/powers'>Change Powers</Link>) </p>
		))
	},

	render() {
		var background, powers;

		background = BackgroundsStore.selected();
		powers = PowersStore.state.selected;

		if (!background) {
			background = {name: ''};
		}

		return (
			<div>
				<h1> Confirm Your Character </h1>

				<h2> Background </h2>
				<p> {background.name} (<Link to='/characters/new'> Change Background </Link>)</p>

				<h2> Powers </h2>

				{this.renderPowers(powers)}

				<h2> Backstory </h2>

				{this.state.backstory.backstory}

				<ConfirmCharacter />

			</div>
		);
	}
});

export default CharacterConfirmationPage;
