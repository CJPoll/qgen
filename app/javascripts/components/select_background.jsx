import React from 'react';
import BackgroundSelector from './background_selector';

var SelectBackground;

SelectBackground = React.createClass({
	render() {
		return (
			<div className='container-fluid'>
				<h1> SelectBackground </h1>
				<BackgroundSelector />
			</div>
		);
	}
});

export default SelectBackground;
