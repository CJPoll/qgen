import React from 'react';
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
		return {players: []};
	},

	handleSelectUser(selectedUser) {
		var players = this.state.players;

		players.push(selectedUser);
		players = _.uniq(players);

		this.setState({players: players});
	},

	render() {
		var heading, players;

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

		return (
			<Panel>
				<PanelTitle>
					{heading}
				</PanelTitle>
				<PanelBody>
					<form action='/campaigns' method='POST'>
						<AuthenticityToken />
						<FormGroup>
							<label htmlFor='campaign[name]'>
								Campaign Name
							</label>
							<input name='campaign[name]' type='text' className='text-input'/>
						</FormGroup>
						<FormGroup>
							<label>
								Players
							</label>
							{players}
						</FormGroup>
						<UserSearch onSelectUser={this.handleSelectUser}/>
						<SubmitButton />
					</form>
				</PanelBody>
			</Panel>
		);
	}
});

export default CampaignForm;
