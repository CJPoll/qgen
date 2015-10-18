import Reflux from 'reflux';
import BackgroundsActions from '../actions/backgroundsActions';

var BackgroundsStore;

BackgroundsStore = Reflux.createStore({
	init() {
		this.listenToMany(BackgroundsActions);
		this.state = {
			backgrounds: [],
			selected: null
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
	},

	onSelectBackground(background) {
		this.state.selected = background;
		this.trigger(this.state);
	},

	selected() {
		return this.state.selected;
	}
});

export default BackgroundsStore;
