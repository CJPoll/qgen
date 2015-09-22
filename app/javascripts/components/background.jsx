import React from 'react';
import { History } from 'react-router';

import BackgroundsActions from '../actions/backgroundsActions';
import BackgroundsStore from '../stores/backgroundsStore';

import Panel from './panel';
import PanelBody from './panelBody';
import PanelTitle from './panelTitle';

var Background;

Background = React.createClass({
	mixins: [History],

	propTypes: {
		background: React.PropTypes.object.isRequired
	},

	handleClick() {
		BackgroundsActions.selectBackground(this.props.background);
		this.history.pushState(null, '/characters/new/step2');
	},

	render() {
		var type;

		if (this.props.background === BackgroundsStore.selected()) {
			type = 'success';
		} else {
			type = 'primary';
		}
		return (
			<Panel onClick={this.handleClick} type={type}>
				<PanelTitle>
					{this.props.background.name}
				</PanelTitle>
				<PanelBody>
					{this.props.background.description}
				</PanelBody>
			</Panel>
		);
	}
});

export default Background;
