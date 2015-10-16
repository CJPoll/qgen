import React from 'react';
import Reflux from 'reflux';

import BeastStore from 'app/javascripts/stores/beastStore';

import BeastActions from 'app/javascripts/actions/beastActions';

import generalStyles from 'app/stylesheets/general';
import FormGroup from 'app/javascripts/components/formGroup';
import SelectChallengeRating from 'app/javascripts/components/selectChallengeRating';
import Submit from 'app/javascripts/components/submit';

var BeastForm;

BeastForm = React.createClass({
	mixins: [Reflux.connect(BeastStore, 'beast')],

	componentWillMount() {
		BeastActions.clear();
	},

	onClick(e) {
		e.preventDefault();
		BeastActions.create(this.state.beast);
	},

	changeName(e) {
		BeastActions.changeName(e.target.value);
	},

	setChallenge(e) {
		BeastActions.changeChallenge(e.target.value);
	},

	changeStrategy(e) {
		BeastActions.changeStrategy(e.target.value);
	},

	render() {
		return (
			<form>
				<FormGroup>
					<label htmlFor='beast[name]'> Name </label>
					<input name='beast[name]' type='text' className={generalStyles.textInput} onChange={this.changeName}/>
				</FormGroup>
				<FormGroup>
					<label htmlFor='beast[challenge]'> Challenge Rating </label>
					<SelectChallengeRating onChange={this.setChallenge} />
				</FormGroup>
				<FormGroup>
					<label htmlFor='beast[strategy]'> Strategy </label>
					<textarea name='beast[strategy]' className={generalStyles.textInput} onChange={this.changeStrategy}></textarea>
				</FormGroup>
				<Submit onClick={this.onClick} value='Submit' />
			</form>
		);
	}
});

export default BeastForm;
