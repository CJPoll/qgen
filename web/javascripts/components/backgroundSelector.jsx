import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import generalStyles from 'web/stylesheets/general.scss';

import BackgroundsStore from '../stores/backgroundsStore';
import BackgroundsActions from 'web/javascripts/actions/backgroundsActions';
import Background from './background';

var BackgroundSelector;

BackgroundSelector = React.createClass({
	mixins: [Reflux.connect(BackgroundsStore, 'backgrounds')],

	componentWillMount() {
		BackgroundsActions.load();
	},

	renderBackground(background) {
		var key = 'background_' + background.id;

		return (
			<div className={generalStyles.clickableTile} key={key}>
				<Background background={background}/>
			</div>
		);
	},

	render() {
		var backgroundList = _.map(this.state.backgrounds, this.renderBackground);
		return (
			<div>
				{backgroundList}
			</div>
		);
	}
});

export default BackgroundSelector;
