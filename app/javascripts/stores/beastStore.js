import Reflux from 'reflux';

import BeastActions from 'app/javascripts/actions/beastActions';
import NotificationsActions from 'app/javascripts/actions/notificationsActions';

var BeastStore;

BeastStore = Reflux.createStore({
	listenables: BeastActions,
	init() {
		this.state = {
			beast: {
				name: '',
				challenge: 'easy',
				strategy: ''
			}
		}
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.beast;
	},

	onChangeName(newName) {
		this.state.beast.name = newName;
		this.trigger(this.state.beast);
	},

	onChangeChallenge(challenge) {
		this.state.beast.challenge = challenge;
		this.trigger(this.state.beast);
	},

	onChangeStrategy(strategy) {
		this.state.beast.strategy = strategy;
		this.trigger(this.state.beast);
	},
	
	onClear() {
		this.init();
		this.trigger(this.state.beast);
	},

	onLoadCompleted(beast) {
		this.state.beast = beast;
		this.trigger(this.state.beast);
	},

	onLoadFailed(response) {
		NotificationsActions.addError({message: 'Could not load this beast'});
	}
});

export default BeastStore;
