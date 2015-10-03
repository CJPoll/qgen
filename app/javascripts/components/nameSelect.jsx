import React from 'react';
import { Link } from 'react-router';
import CharacterActions from '../actions/characterActions';

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
			<div>
				<h1> Name </h1>
				<div className='form-group'>
					<label htmlFor='first-name'>
						Character's First name
					</label>
					<input type='text' className='text-input' name='first-name' onChange={this.handleFirstNameChange}/>
				</div>
				<div>
					<label htmlFor='last-name'>
						Character's Last Name
					</label>
					<input type='text' className='text-input' name='last-name' onChange={this.handleLastNameChange}/>
				</div>
				<div className='form-group'>
					<Link to='/characters/new/backgrounds' className='submit'>
						Move On
					</Link>
				</div>
			</div>
		);
	}
});

export default NameSelector;
