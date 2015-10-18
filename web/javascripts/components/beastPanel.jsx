import React from 'react';
import _ from 'lodash';
import history from 'web/javascripts/history';

import { Panel, PanelTitle, PanelBody } from 'web/javascripts/components/panel';

var BeastPanel;

BeastPanel = React.createClass({
	onClick() {
		history.pushState(null, '/beasts/' + this.props.beast.id);
	},

	render() {
		return (
			<Panel onClick={this.onClick}>
				<PanelTitle>
					{this.props.beast.name} [{_.capitalize(this.props.beast.challenge)}]
				</PanelTitle>
				<PanelBody>
					{this.props.beast.strategy}
				</PanelBody>
			</Panel>
		)
	}
});

export default BeastPanel;
