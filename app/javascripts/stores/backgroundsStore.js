import Reflux from 'reflux';
import BackgroundsActions from '../actions/backgroundsActions';

var BackgroundsStore;

BackgroundsStore = Reflux.createStore({
	init() {
		this.listenToMany(BackgroundsActions);
		this.state = {
			backgrounds: []
		};
	},

	getInitialState() {
		if (this.state === null || this.state === undefined) {
			this.init();
		}

		return this.state;
	},

	onLoadCompleted(backgrounds) {
		this.state.backgrounds = this.state.backgrounds.concat(backgrounds);
		this.trigger(this.state);
	}
});

export default BackgroundsStore;
