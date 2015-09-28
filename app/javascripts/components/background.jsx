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
		this.history.pushState(null, '/characters/new/powers');
	},

	render() {
		var active = this.props.background === BackgroundsStore.selected();

		return (
			<Panel onClick={this.handleClick} active={active}>
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
