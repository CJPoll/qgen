import React from 'react';
import { Link } from 'react-router';

var CharacterCreator;

CharacterCreator = React.createClass({
	render() {
		return (
			<div>
				<h1> CharacterCreator </h1>
				<Link to='/thing'> Thing </Link>
			</div>
		);
	}
});

export default CharacterCreator;
