import React from 'react';

var CharacterCreatorApp;

CharacterCreatorApp = React.createClass({
	render() {
		return (
			<div>
				<Navbar userData={{userData: 'notNull'}} />
				{this.props.children}
			</div>
		);
	}
});

export default CharacterCreatorApp;
