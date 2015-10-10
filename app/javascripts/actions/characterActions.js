import Reflux from 'reflux';

var CharacterActions;

CharacterActions = Reflux.createActions({
	load: {asyncResult: true},
	selectCampaign: {asyncResult: false}
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
