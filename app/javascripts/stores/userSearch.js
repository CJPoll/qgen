import Reflux from 'reflux';
import UserSearchActions from '../actions/userSearchActions';

var UserSearchStore;

UserSearchStore = Reflux.createStore({
	init() {
		this.listenToMany(UserSearchActions);
		this.state = {
			searchTerm: '',
			results: []
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state;
	},

	onSearchCompleted(results) {
		this.state.results = results;
		this.trigger(this.state);
	},

	onSearchFailed(e) {
		return e;
	}
});

export default UserSearchStore;