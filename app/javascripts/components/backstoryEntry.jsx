import React from 'react';
import generalStyles from 'app/stylesheets/general.scss';
import buttonStyles from 'app/stylesheets/buttons.scss';

import { Link } from 'react-router';
import { Panel, PanelTitle, PanelBody } from './panel';
import FormGroup from './formGroup';

import BackstoryStore from '../stores/backstoryStore';
import BackstoryActions from '../actions/backstoryActions';

var BackstoryEntry;

BackstoryEntry = React.createClass({
	componentWillMount() {
		var state = BackstoryStore.getInitialState();
		this.setState({backstory: state.backstory});
	},

	handleKeyUp(e) {
		BackstoryActions.setBackstory(e.target.value);
		this.setState({backstory: e.target.value});
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
						<textarea onChange={this.handleKeyUp} value={this.state.backstory} className={generalStyles.textInput}/>
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
