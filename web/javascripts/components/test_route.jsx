import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import BackgroundsStore from '../stores/backgroundsStore';

var TestRoute;

TestRoute = React.createClass({
	mixins: [ Reflux.connect(BackgroundsStore, 'backgrounds') ],

	render() {
		return (
			<div onBackButtonEvent={this.onBackButtonEvent}>
				<h1> Test Route </h1>
				<Link to='/characters/new'> Link </Link>
			</div>
		);
	}
});

export default TestRoute;
