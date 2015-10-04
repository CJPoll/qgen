import React from 'react';
import { Link } from 'react-router';
import { Panel, PanelTitle, PanelBody } from './panel';
import CharacterActions from '../actions/characterActions';
import FormGroup from './formGroup';

var NameSelector;

NameSelector = React.createClass({
	handleFirstNameChange(e) {
		CharacterActions.changeFirstName(e.target.value);
	},

	handleLastNameChange(e) {
		CharacterActions.changeLastName(e.target.value);
	},

	render() {
		return (
			<Panel>
				<PanelTitle> Name </PanelTitle>
				<PanelBody>
					<FormGroup>
						<label htmlFor='first-name'>
							Character's First name
						</label>
						<input type='text' className='text-input' name='first-name' onChange={this.handleFirstNameChange}/>
					</FormGroup>
					<FormGroup>
						<label htmlFor='last-name'>
							Character's Last Name
						</label>
						<input type='text' className='text-input' name='last-name' onChange={this.handleLastNameChange}/>
					</FormGroup>
					<FormGroup>
						<Link to='/characters/new/backgrounds' className='submit'>
							Move On
						</Link>
					</FormGroup>
				</PanelBody>
			</Panel>
		);
	}
});

export default NameSelector;
