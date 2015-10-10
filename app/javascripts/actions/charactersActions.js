import Reflux from 'reflux';
import $ from 'jquery';

var CharactersActions = Reflux.createActions({
	load: {asyncResult: true}
});

CharactersActions.load.listen(function() {
	var url;

	url = '/api/characters';

	$.get(url)
		.then(this.completed)
		.fail(this.failed);
});

export default CharactersActions;
