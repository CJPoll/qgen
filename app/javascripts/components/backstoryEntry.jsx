import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import BackstoryActions from '../actions/backstoryActions';
import BackstoryStore from '../stores/backstoryStore';
import { Panel, PanelTitle, PanelBody } from './panel';
import FormGroup from './formGroup';

var BackstoryEntry;

BackstoryEntry = React.createClass({
	mixins: [Reflux.connect(BackstoryStore, 'backstory')],

	handleKeyUp(e) {
		BackstoryActions.setBackstory(e.target.value);
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
						<textarea onChange={this.handleKeyUp} onKeyUp={this.handleKeyUp} value={this.state.backstory.backstory} className='textarea'/>
					</FormGroup>
					<FormGroup>
						<Link to='/characters/new/confirm' className='submit'> Move On </Link>
					</FormGroup>
				</PanelBody>
			</Panel>
		);
	}
});

export default BackstoryEntry;
