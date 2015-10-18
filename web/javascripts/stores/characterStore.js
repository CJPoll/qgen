import Reflux from 'reflux';
import CharacterActions from 'web/javascripts/actions/characterActions';

var CharacterStore;

CharacterStore = Reflux.createStore({
	init() {
		this.listenToMany(CharacterActions);
		this.state = {
			character: {
				first_name: '',
				last_name: '',
				campaigns: [],
				campaign: {},
				background: {}
			}
		}
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.character;
	},

	onLoadCompleted(data) {
		this.state.character = data;
		this.trigger(this.state.character);
	}
});

export default CharacterStore;
