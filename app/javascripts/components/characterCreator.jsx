import React from 'react';
import Navbar from './navbar';

var CharacterCreator;

CharacterCreator = React.createClass({
	render() {
		return (
			<div>
				<Navbar userData={{userData: 'notNull'}} />
				{this.props.children}
			</div>
		);
	}
});

export default CharacterCreator;
