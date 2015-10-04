import React from 'react';
import QgenNavbar from './qgenNavbar';

var CharacterCreator;

CharacterCreator = React.createClass({
	render() {
		return (
			<div>
				<QgenNavbar userData={{userData: 'notNull'}} />
				<div className='container-fluid'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default CharacterCreator;
