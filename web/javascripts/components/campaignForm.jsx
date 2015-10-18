import React from 'react';
import generalStyles from 'web/stylesheets/general.scss';

import CampaignActions from 'web/javascripts/actions/campaignActions';
import UserSearchActions from 'web/javascripts/actions/userSearchActions';

import FormGroup from './formGroup';
import SubmitButton from './submit';
import UserSearch from './userSearch';

var CampaignForm;

CampaignForm = React.createClass({
	propTypes: {
		submitAction: React.PropTypes.func.isRequired,
		campaign: React.PropTypes.object
	},

	nameChanged(e) {
		CampaignActions.changeName(e.target.value);
	},

	handleSelectUser(selectedUser) {
		CampaignActions.addPlayer(selectedUser);
	},

	submitAction(e) {
		e.preventDefault();
		UserSearchActions.clear();
		this.props.submitAction();
	},

	render() {
		var campaignName, players;

		campaignName = '';

		if (this.props.campaign && this.props.campaign.name) {
			campaignName = this.props.campaign.name || '';
		}

		players = []

		if (this.props.campaign && this.props.campaign.players) {
			players = _.map(_.uniq(this.props.campaign.players), player => (
				<div>
					<input type='text' disabled='true' value={player.first_name + ' ' + player.last_name}/>
					<input name='players[]' type='hidden' value={player.id} />
				</div>
			));
		}

		if (players.length === 0) {
			players = <p>No players added yet!</p>;
		}

		return (
			<form>
				<FormGroup>
					<label htmlFor='campaign[name]'>
						Campaign Name
					</label>
					<input name='campaign[name]' type='text' className={generalStyles.textInput} value={campaignName} onChange={this.nameChanged} />
				</FormGroup>
				<FormGroup>
					<label>
						Players
					</label>
					{players}
				</FormGroup>
				<UserSearch onSelectUser={this.handleSelectUser}/>
				<SubmitButton onClick={this.submitAction}/>
			</form>
		);
	}
});

export default CampaignForm;
