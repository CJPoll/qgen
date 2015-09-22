import React from 'react';
import Reflux from 'reflux';
import BackgroundsStore from '../stores/backgroundsStore';
import Background from './background';
import _ from 'lodash';

var BackgroundSelector;

BackgroundSelector = React.createClass({
	mixins: [Reflux.connect(BackgroundsStore, 'backgrounds')],

	renderBackground(background) {
		var key = 'background_' + background.id;

		return (
			<div className='tiled' key={key}>
				<Background background={background}/>
			</div>
		);
	},

	render() {
		var backgroundList = _.map(this.state.backgrounds.backgrounds, this.renderBackground);
		return (
			<div>
				{backgroundList}
			</div>
		);
	}
});

export default BackgroundSelector;
