import React from 'react';
import buttonStyles from 'app/stylesheets/buttons.scss';

var CreateCharacterButton;

CreateCharacterButton = React.createClass({
	render() {
		return (
			<a href='/characters/new' className={buttonStyles.primaryButton}>
				<span className="glyphicon glyphicon-plus"></span>
				&nbsp;
				Create Character
			</a>
		);
	}
});

export default CreateCharacterButton;
