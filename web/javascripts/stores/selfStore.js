import Reflux from 'reflux';

import SelfActions from 'web/javascripts/actions/selfActions';

var SelfStore = Reflux.createStore({
	init() {
		this.listenToMany(SelfActions);
		this.state = {
			currentUser: {}
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.currentUser;
	},

	onLoadCompleted(userData) {
		this.state.currentUser = userData;
		this.trigger(this.state.currentUser);
	}
});

export default SelfStore;
