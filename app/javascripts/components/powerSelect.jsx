import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import buttonStyles from 'app/stylesheets/buttons.scss';
import { Link } from 'react-router';

import PowersStore from '../stores/powersStore';
import Power from './power';

var powerSelect = React.createClass({
	mixins: [Reflux.connect(PowersStore, 'powers')],

	render() {
		var powers, powerComponents, submitClass;

		powers = this.state.powers.powers;

		powerComponents = _.map(powers, function(power) {
			return <Power power={power}/>;
		});

		submitClass = 'disabled-submit clearfix';
		if (PowersStore.maxSelected()) {
			submitClass = 'submit clearfix';
		}

		return (
			<div>
				<h1> Select Powers </h1>
				<div>
				<Link to='/characters/new/backgrounds'>
					Back
				</Link>
				</div>
				{powerComponents}
				<Link to='/characters/new/backstory' className={buttonStyles.primaryButton}> Move On </Link>
			</div>
		);
	}
});

export default powerSelect;