import Reflux from 'reflux';
import BackgroundsActions from '../actions/backgroundsActions';

var BackgroundsStore;

BackgroundsStore = Reflux.createStore({
	init() {
		this.listenToMany(BackgroundsActions);
		this.state = {
			backgrounds: [],
			newCharacter: {}
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
		this.state.newCharacter.background = background;
		this.trigger(this.state);
	},

	selected() {
		return this.state.newCharacter.background;
	}
});

export default BackgroundsStore;
