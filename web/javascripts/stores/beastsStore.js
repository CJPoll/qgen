import Reflux from 'reflux';

import BeastsActions from 'web/javascripts/actions/beastsActions';

var BeastsStore;

BeastsStore = Reflux.createStore({
	listenables: BeastsActions,

	init() {
		this.state = {
			beasts: []
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.beasts;
	},

	onLoadCompleted(beasts) {
		this.state.beasts = beasts;
		this.trigger(this.state.beasts);
	}
});

export default BeastsStore;
