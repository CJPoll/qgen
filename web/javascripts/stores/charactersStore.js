import Reflux from 'reflux';

import CharactersActions from 'web/javascripts/actions/charactersActions';

var CharactersStore;

CharactersStore = Reflux.createStore({
	init() {
		this.listenToMany(CharactersActions);
		this.state = {
			characters: []
		}
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.characters;
	},

	onLoadCompleted(data) {
		this.state.characters = data;
		this.trigger(this.state.characters);
	}
});

export default CharactersStore;
