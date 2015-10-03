import React from 'react';

import CharacterActions from '../actions/characterActions';

var ConfirmCharacter = React.createClass({
	handleClick(event) {
		CharacterActions.confirmCharacter();
	},

	render() {
		return (
			<a onClick={this.handleClick} className='confirm-character'>
				Confirm Character
			</a>
		);
	}
});

export default ConfirmCharacter;
