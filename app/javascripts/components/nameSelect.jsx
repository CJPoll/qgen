import React from 'react';
import Reflux from 'reflux';
import history from 'app/javascripts/history';
import generalStyles from 'app/stylesheets/general.scss';
import buttonStyles from 'app/stylesheets/buttons.scss';

import CampaignsStore from '../stores/campaignsStore';
import NewCharacterStore from 'app/javascripts/stores/newCharacterStore';

import { Link } from 'react-router';
import { Panel, PanelTitle, PanelBody } from './panel';
import Submit from 'app/javascripts/components/submit';
import NewCharacterActions from '../actions/newCharacterActions';
import FormGroup from './formGroup';
import SelectCampaign from './selectCampaign';

var NameSelector;

NameSelector = React.createClass({
	mixins: [
		Reflux.connect(CampaignsStore, 'campaigns'),
		Reflux.connect(NewCharacterStore, 'character')
	],

	handleFirstNameChange(e) {
		NewCharacterActions.changeFirstName(e.target.value);
	},

	handleLastNameChange(e) {
		NewCharacterActions.changeLastName(e.target.value);
	},

	selectCampaign(e) {
		var campaignId = e.target.value;
		NewCharacterActions.selectCampaign(campaignId);
	},

	onSubmit(e) {
		e.preventDefault();
		history.pushState(null, '/characters/new/backgrounds');
	},

	render() {
		var canMoveOn;

		canMoveOn = this.state.character.campaignId > 0 &&
			this.state.character.firstName !== '' &&
			this.state.character.lastName !== '';

		return (
			<Panel>
				<PanelTitle> Name </PanelTitle>
				<PanelBody>
					<form>
						<FormGroup>
							<label>
								Campaign
							</label>
							<SelectCampaign campaigns={this.state.campaigns} onChange={this.selectCampaign} startBlank='true' />
						</FormGroup>
						<FormGroup>
							<label htmlFor='first-name'>
								Character's First name
							</label>
							<input type='text' className={generalStyles.textInput} name='first-name' onChange={this.handleFirstNameChange}/>
						</FormGroup>
						<FormGroup>
							<label htmlFor='last-name'>
								Character's Last Name
							</label>
							<input type='text' className={generalStyles.textInput} name='last-name' onChange={this.handleLastNameChange}/>
						</FormGroup>
						<FormGroup>
							<Submit onClick={this.onSubmit} value='Move On' disabled={!canMoveOn}/>
						</FormGroup>
					</form>
				</PanelBody>
			</Panel>
		);
	}
});

export default NameSelector;
