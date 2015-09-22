import React from 'react';
import BackgroundSelector from './background_selector';
import { Link } from 'react-router';

var SelectBackground;

SelectBackground = React.createClass({
	onBackButtonEvent(e) {
		e.preventDefault();
		this.goBack();
	},

	render() {
		return (
			<div onBackButtonEvent={this.onBackButton}>
				<div className='container-fluid'>
					<h1> SelectBackground </h1>
				<Link to='/characters/new/step2'>
					Link
				</Link>
					<BackgroundSelector />
				</div>
			</div>
		);
	}
});

export default SelectBackground;
