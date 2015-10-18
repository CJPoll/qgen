import React from 'react';
import Reflux from 'reflux';
import generalStyles from 'web/stylesheets/general.scss';
import buttonStyles from 'web/stylesheets/buttons.scss';

import { Link } from 'react-router';
import { Panel, PanelTitle, PanelBody } from './panel';
import FormGroup from './formGroup';

import NewCharacterStore from '../stores/newCharacterStore';
import BackstoryActions from '../actions/backstoryActions';

var BackstoryEntry;

BackstoryEntry = React.createClass({
	mixins: [Reflux.connect(NewCharacterStore, 'character')],

	handleKeyUp(e) {
		BackstoryActions.setBackstory(e.target.value);
	},

	changePrivateBackstory(e) {
		BackstoryActions.setPrivateBackstory(e.target.value);
	},

	render() {
		return (
			<Panel className='slide'>
				<PanelTitle>
					Backstory
				</PanelTitle>

				<PanelBody>
					<p> Enter whatever backstory you would like for your character to have </p>
					<FormGroup>
						<textarea onChange={this.handleKeyUp} value={this.state.character.backstory} className={generalStyles.textInput}/>
					</FormGroup>
						<p> Enter whatever private backstory you like. Noone else will see this. </p>
						<textarea onChange={this.changePrivateBackstory} value={this.state.character.privateBackstory} className={generalStyles.textInput}/>
					<FormGroup>
					</FormGroup>
					<FormGroup>
						<Link to='/characters/new/confirm' className={buttonStyles.primaryButton}> Move On </Link>
					</FormGroup>
				</PanelBody>
			</Panel>
		);
	}
});

export default BackstoryEntry;
