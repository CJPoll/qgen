import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import { Panel, PanelTitle, PanelBody } from './panel';
import ButtonGroup from './buttonGroup';
import ButtonToolbar from './buttonToolbar';
import DeleteCharacterButton from './deleteCharacterButton';
import SelectCampaign from './selectCampaign';

import CharacterStore from 'app/javascripts/stores/characterStore';
import CampaignsStore from 'app/javascripts/stores/campaignsStore';
import CharacterActions from 'app/javascripts/actions/characterActions';

var ShowCharacter;

ShowCharacter = React.createClass({
	mixins: [
		Reflux.connect(CharacterStore, 'character'),
		Reflux.connect(CampaignsStore, 'campaigns')
	],

	componentWillMount() {
		CharacterActions.load(this.props.params.characterId);
	},

	changeCampaign(e) {
		var data, url, csrf_param, csrf_token;

		csrf_param = $('meta[name=csrf-param]').attr('content');
		csrf_token = $('meta[name=csrf-token]').attr('content');

		data = {
			character: {
				campaign_id: e.target.value
			},
			_method: 'PUT'
		};

		data[csrf_param] = csrf_token

		url = '/api/characters/' + this.state.character.id;
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			dataType: 'json'
		});
	},

	renderPowers() {
		var powers = this.state.character.powers;

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
		var backgroundName, character, fullName, deleteButton;

		character = this.state.character;
		fullName = character.first_name + ' ' + character.last_name;

		deleteButton = (
			<ButtonToolbar>
				<ButtonGroup>
					<DeleteCharacterButton character={character} />
				</ButtonGroup>
			</ButtonToolbar>
		);

		backgroundName = this.state.character.background.name || '';

		return (
			<Panel>
				<PanelTitle>
					{fullName}
				</PanelTitle>

				<PanelBody>
					{deleteButton}

					<h2> Campaign </h2>
					<SelectCampaign campaigns={this.state.campaigns} initialSelected={this.state.character.campaign} onChange={this.changeCampaign} />

					<h2> Background </h2>
					<p> {backgroundName} </p>

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
