import React from 'react';
import Reflux from 'reflux';
import generalStyles from 'app/stylesheets/general.scss';
import buttonStyles from 'app/stylesheets/buttons.scss';

import { Link } from 'react-router';
import { Panel, PanelTitle, PanelBody } from './panel';
import NewCharacterActions from '../actions/newCharacterActions';
import FormGroup from './formGroup';
import CampaignsStore from '../stores/campaignsStore';
import SelectCampaign from './selectCampaign';

var NameSelector;

NameSelector = React.createClass({
	mixins: [Reflux.connect(CampaignsStore, 'campaigns')],

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

	render() {
		return (
			<Panel>
				<PanelTitle> Name </PanelTitle>
				<PanelBody>
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
						<Link to='/characters/new/backgrounds' className={buttonStyles.primaryButton}>
							Move On
						</Link>
					</FormGroup>
				</PanelBody>
			</Panel>
		);
	}
});

export default NameSelector;
