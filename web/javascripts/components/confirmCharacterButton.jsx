import React from 'react';
import buttonStyles from 'web/stylesheets/buttons.scss';

import NewCharacterActions from '../actions/newCharacterActions.js';

var ConfirmCharacter = React.createClass({
	handleClick(event) {
		NewCharacterActions.confirmCharacter();
	},

	render() {
		return (
			<a onClick={this.handleClick} className={buttonStyles.primaryButton}>
				Confirm Character
			</a>
		);
	}
});

export default ConfirmCharacter;
