import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import BeastStore from 'app/javascripts/stores/beastStore';

import BeastActions from 'app/javascripts/actions/beastActions';

import { Panel, PanelTitle, PanelBody } from 'app/javascripts/components/panel';

var ShowBeast;

ShowBeast = React.createClass({
	mixins: [Reflux.connect(BeastStore, 'beast')],

	componentWillMount() {
		BeastActions.load(this.props.params.beastId);
	},

	render() {
		return (
			<Panel>
				<PanelBody>
					<h1> {this.state.beast.name} </h1>

					<h2> Challenge Rating </h2>
					<p> { _.capitalize(this.state.beast.challenge) } </p>

					<h2> Strategy </h2>
					<p> { this.state.beast.strategy } </p>
				</PanelBody>
			</Panel>
		);
	}
});

export default ShowBeast;
