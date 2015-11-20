import Reflux from 'reflux';
import BackgroundsActions from '../actions/backgroundsActions';

var BackgroundsStore;

BackgroundsStore = Reflux.createStore({
	listenables: [BackgroundsActions],

	init() {
		this.state = {
			backgrounds: [],
			selected: null
		};
	},

	getInitialState() {
		if (this.state === null || this.state === undefined) {
			this.init();
		}

		return this.state.backgrounds;
	},

	onLoadCompleted(backgrounds) {
		this.state.backgrounds = backgrounds.data;
		this.trigger(this.state.backgrounds);
	},

	onSelectBackground(background) {
		this.state.selected = background;
		this.trigger(this.state.backgrounds);
	},

	selected() {
		return this.state.selected;
	}
});

export default BackgroundsStore;
