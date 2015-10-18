import Reflux from 'reflux';

import NotificationsActions from 'web/javascripts/actions/notificationsActions';

var NotificationsStore;

NotificationsStore = Reflux.createStore({
	init() {
		this.listenToMany(NotificationsActions);
		this.state = {
			errors: [],
			warnings: [],
			successes: []
		}
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state;
	},

	onRemoveError(error) {
		var errors = this.state.errors;
		_.remove(errors, e => e === error);

		this.state.errors = errors;
		this.trigger(this.state);
	},

	onAddError(error) {
		this.state.errors.push(error)
		this.trigger(this.state);
	},

	onRemoveWarning(warning) {
		var warnings = this.state.warnings;
		_.remove(warnings, w => w === warning);

		this.state.warnings = warnings;
		this.trigger(this.state);
	},

	onAddWarning(warning) {
		this.state.warnings.push(warning);
		this.trigger(this.state);
	},

	onRemoveSuccess(success) {
		var successes = this.state.successes;
		_.remove(successes, w => w === success);

		this.state.successes = successes;
		this.trigger(this.state);
	},

	onAddSuccess(success) {
		this.state.successes.push(success);
		this.trigger(this.state);
	}
});

export default NotificationsStore
