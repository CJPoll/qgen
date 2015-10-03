import Reflux from 'reflux';
import _ from 'lodash';
import $ from 'jquery';

import CharacterActions from '../actions/characterActions';

import BackgroundsStore from './backgroundsStore';
import PowersStore from './powersStore';
import BackstoryStore from './backstoryStore';

var NewCharacterStore = Reflux.createStore({

	init() {
		this.listenToMany(CharacterActions);

		this.listenTo(BackgroundsStore, this.onBackgroundChanged);
		this.listenTo(PowersStore, this.onPowersChanged);
		this.listenTo(BackstoryStore, this.onBackstoryChanged);

		this.state = {
			character: {
				background: null,
				powers: [],
				backstory: '',
				firstName: '',
				lastName: ''
			}
		};
	},

	onBackgroundChanged(backgroundsState) {
		this.state.character.background = backgroundsState.selected;
		this.trigger(this.state);
	},

	onPowersChanged(powersState) {
		this.state.character.powers = powersState.selected;
		this.trigger(this.state);
	},

	onBackstoryChanged(backstoryState) {
		this.state.character.backstory = backstoryState.backstory;
		this.trigger(this.state);
	},

	onChangeFirstName(firstName) {
		this.state.character.firstName = firstName;
		this.trigger(this.state);
	},

	onChangeLastName(lastName) {
		this.state.character.lastName = lastName;
		this.trigger(this.state);
	},

	onConfirmCharacter() {
		var url, data, authToken;

		authToken = $('meta[name=csrf-token]').attr('content');
		data = {
			authenticity_token: authToken,
			character: {}
		};
		url = '/characters';

		_.extend(data.character, this.state.character);
		data.character.first_name = data.character.firstName;
		data.character.last_name = data.character.lastName;

		data = JSON.stringify(data);

		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'json',
			contentType: 'application/json',
			data: data
		}).then(this.onCharacterPosted)
			.fail(this.onPostFailed);
	},

	onCharacterPosted(response) {
		window.location = '/characters/' + response.id;
	},

	onPostFailed() {
	}
});

export default NewCharacterStore;