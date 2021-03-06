import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import BeastStore from 'web/javascripts/stores/beastStore';
import BeastActions from 'web/javascripts/actions/beastActions';
import requireLogin from 'web/javascripts/mixins/requireLogin';

import BeastPanel from 'web/javascripts/components/beastPanel';

var ShowBeast;

ShowBeast = React.createClass({
	mixins: [
		Reflux.connect(BeastStore, 'beast'),
		requireLogin
	],

	componentWillMount() {
		BeastActions.load(this.props.params.beastId);
	},

	render() {
		return <BeastPanel beast={this.state.beast} />
	}
});

export default ShowBeast;
