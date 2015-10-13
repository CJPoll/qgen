import React from 'react';
import generalStyles from 'app/stylesheets/general.scss';

import FormGroup from './formGroup';
import SubmitButton from './submit';
import UserSearch from './userSearch';

var CampaignForm;

CampaignForm = React.createClass({
	propTypes: {
		submitAction: React.PropTypes.func.isRequired
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
		var campaignName, players;

		campaignName = '';

		if (this.props.campaign && this.props.campaign.name) {
			campaignName = this.props.campaign.name || '';
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
			<div>
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
				<SubmitButton onClick={this.props.submitAction.bind(this, this.state)}/>
			</div>
		);
	}
});

export default CampaignForm;