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

	loggedIn() {
		return Object.keys(this.state.currentUser).length > 0;
	},

	onLoadCompleted(userData) {
		this.state.currentUser = userData.data;
		this.trigger(this.state.currentUser);
	},

	onLoadFailed() {
		return;
	},

	onLoaded(userData) {
		this.state.currentUser = userData;
		this.trigger(this.state.currentUser);
	},

	onClear() {
		this.state.currentUser = {};
		this.trigger(this.state.currentUser);
	}
});

export default SelfStore;
