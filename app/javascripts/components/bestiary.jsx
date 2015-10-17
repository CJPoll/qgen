import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import generalStyles from 'app/stylesheets/general';

import BeastsStore from 'app/javascripts/stores/beastsStore';

import BeastsActions from 'app/javascripts/actions/beastsActions';

import BeastPanel from 'app/javascripts/components/beastPanel';

var Bestiary;

Bestiary = React.createClass({
	mixins: [Reflux.connect(BeastsStore, 'beasts')],

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
