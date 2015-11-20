import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import history from 'web/javascripts/history';
import buttonStyles from 'web/stylesheets/buttons.scss';
import generalStyles from 'web/stylesheets/general.scss';

import PowersStore from '../stores/powersStore';
import NewCharacterStore from 'web/javascripts/stores/newCharacterStore';
import PowersActions from 'web/javascripts/actions/powersActions';

import { Link } from 'react-router';
import Submit from 'web/javascripts/components/submit';

import Power from './power';

var powerSelect = React.createClass({
	mixins: [
		Reflux.connect(PowersStore, 'powers'),
		Reflux.connect(NewCharacterStore, 'character')
	],

	componentWillMount() {
		PowersActions.load();
	},

	onClick(e) {
		e.preventDefault();
		history.pushState(null, '/characters/new/backstory');
	},

	render() {
		var enabled, powers, powerComponents, submitClass;

		powers = this.state.powers.powers;

		powerComponents = _.map(powers, function(power) {
			return <Power power={power}/>;
		});

		enabled = PowersStore.maxSelected();

		return (
			<div>
				<h1> Select Powers </h1>
				<div>
				<Link to='/characters/new/backgrounds'>
					Back
				</Link>
				</div>
				{powerComponents}
				<div className={generalStyles.fullWidth}>
					<Submit onClick={this.onClick} disabled={!enabled} value='Move On'/>
				</div>
			</div>
		);
	}
});

export default powerSelect;
