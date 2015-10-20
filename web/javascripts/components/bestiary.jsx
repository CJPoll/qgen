import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import generalStyles from 'web/stylesheets/general';

import BeastsStore from 'web/javascripts/stores/beastsStore';
import BeastsActions from 'web/javascripts/actions/beastsActions';
import requireLogin from 'web/javascripts/mixins/requireLogin';

import BeastPanel from 'web/javascripts/components/beastPanel';

var Bestiary;

Bestiary = React.createClass({
	mixins: [
		Reflux.connect(BeastsStore, 'beasts'),
		requireLogin
	],

	componentWillMount() {
		BeastsActions.load();
	},

	renderBeasts() {
		var beasts = _.map(this.state.beasts, function(beast) {
			return (
				<div className={generalStyles.clickableTile}>
					<BeastPanel beast={beast} />
				</div>
			);
		});

		return beasts;
	},

	render() {
		return (
			<div>
				{this.renderBeasts()}
			</div>
		)
	}
});

export default Bestiary;
