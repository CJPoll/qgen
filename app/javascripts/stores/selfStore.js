import Reflux from 'reflux';

import SelfActions from 'app/javascripts/actions/selfActions';

var SelfStore = Reflux.createStore({
	init() {
		this.listenToMany(SelfActions);
		this.state = {
			currentUser: {
				first_name: '',
				last_name: ''
			}
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
