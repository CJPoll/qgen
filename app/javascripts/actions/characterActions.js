import Reflux from 'reflux';
import $ from 'jquery';
import history from 'app/javascripts/history';
import addAuthenticityToken from 'app/javascripts/helpers/addAuthenticityToken';

import NotificationsActions from 'app/javascripts/actions/notificationsActions';

var CharacterActions;

CharacterActions = Reflux.createActions({
	load: {asyncResult: true},
	selectCampaign: {asyncResult: false},
	delete: {asyncResult: true}
});

CharacterActions.delete.listen(function(character) {
	var data, url;

	data = {
		_method: 'delete',
		dataType: 'json'
	};

	data = addAuthenticityToken(data);

	url = '/api/characters/' + character.id;

	$.post(url, data)
		.then(function(response) {
			NotificationsActions.addSuccess({message: 'You successfully deleted ' + character.first_name + '.'});
			history.pushState(null, '/characters');
		})
		.fail(function(response) {
			NotificationsActions.addError({message: 'Couldn\'t delete ' + character.first_name + '.'});
		});
});

CharacterActions.load.listen(function(characterId) {
	var data, url;

	url = '/api/characters/' + characterId;

	data = {
		dataType: 'json'
	}

	$.get(url, data)
		.then(this.completed)
		.fail(this.failed);
});

export default CharacterActions;
