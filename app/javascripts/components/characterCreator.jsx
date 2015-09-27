import React from 'react';
import Navbar from './navbar';

var CharacterCreator;

CharacterCreator = React.createClass({
	render() {
		return (
			<div>
				<Navbar userData={{userData: 'notNull'}} />
				<div className='container-fluid'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default CharacterCreator;
