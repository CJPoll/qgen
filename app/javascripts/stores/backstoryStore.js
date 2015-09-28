import Reflux from 'reflux';
import BackstoryActions from '../actions/backstoryActions';

var BackstoryStore;

var BackstoryStore = Reflux.createStore({
	init() {
		this.listenToMany(BackstoryActions);
		this.state = {
			backstory: ''
		}
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}
		return this.state;
	},

	onSetBackstory(backstory) {
		this.state.backstory = backstory;
		this.trigger(this.state);
	}
});

export default BackstoryStore;
