import React from 'react';
import _ from 'lodash';
import generalStyles from 'app/stylesheets/general.scss';
import addAuthentictyToken from 'app/javascripts/helpers/addAuthenticityToken';

import FormGroup from './formGroup';
import { Panel, PanelTitle, PanelBody } from './panel';

import SubmitButton from './submit';
import AuthenticityToken from './authenticityToken';
import UserSearch from './userSearch';

var CampaignForm;

CampaignForm = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object
	},

	getInitialState() {
		var players, name;

		players = this.props.players || [];
		name = this.props.name || '';

		return {
			players: players,
			name: name
		};
	},

	submit() {
		var data, url;

		url = '/api/campaigns';
		data = {
			campaign: {
				name: this.state.name
			},
			players: _.map(this.state.players, player => player.id)
		};

		data = addAuthentictyToken(data);

		$.post(url, data)
	},

	nameChanged(e) {
		this.state.name = e.target.value;
	},

	handleSelectUser(selectedUser) {
		var players = this.state.players;

		if (selectedUser === null || selectedUser === undefined) {
			return;
		}

		players.push(selectedUser);
		players = _.uniq(players, false, 'id');

		this.setState({players: players});
	},

	render() {
		var campaignName, heading, players;

		if (this.props.campaign) {
			heading = 'Edit ' + this.props.campaign.name;
		} else {
			heading = 'New Campaign';
		}

		players = _.map(_.uniq(this.state.players), player => (
			<div>
				<input type='text' disabled='true' value={player.first_name + ' ' + player.last_name}/>
				<input name='players[]' type='hidden' value={player.id} />
			</div>
		));

		if (players.length === 0) {
			players = <p>No players added yet!</p>;
		}

		campaignName = '';

		if (this.props.campaign && this.props.campaign.name) {
			campaignName = this.props.campaign.name || '';
		}

		return (
			<Panel>
				<PanelTitle>
					{heading}
				</PanelTitle>
				<PanelBody>
					<FormGroup>
						<label htmlFor='campaign[name]'>
							Campaign Name
						</label>
						<input name='campaign[name]' type='text' className={generalStyles.textInput} defaultValue={campaignName} onChange={this.nameChanged} />
					</FormGroup>
					<FormGroup>
						<label>
							Players
						</label>
						{players}
					</FormGroup>
					<UserSearch onSelectUser={this.handleSelectUser}/>
					<SubmitButton onClick={this.submit}/>
				</PanelBody>
			</Panel>
		);
	}
});

export default CampaignForm;
