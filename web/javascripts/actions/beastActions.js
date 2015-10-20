import Reflux from 'reflux';
import $ from 'jquery';
import addAuthenticityToken from 'web/javascripts/helpers/addAuthenticityToken';
import history from 'web/javascripts/history';

import NotificationsActions from 'web/javascripts/actions/notificationsActions';

var BeastActions;

BeastActions = Reflux.createActions({
	changeChallenge: {asyncResult: false},
	changeName: {asyncResult: false},
	changeStrategy: {asyncResult: false},
	clear: {asyncResult: false, sync: true},
	create: {asyncResult: true},
	load: {asyncResult: true}
});

BeastActions.create.listen(function(beast) {
	var data, url;

	url = '/api/beasts';

	data = {
		dataType: 'json',
		beast: beast
	};

	data = addAuthenticityToken(data);

	$.post(url, data)
	.then(function(response) {
		history.pushState(null, '/beasts/' + response.id);
		NotificationsActions.addSuccess({message: 'Successfully created the ' + beast.name + '.'});
	})
	.fail(function(response) {
		NotificationsActions.addError({message: 'Couln\'t create the beast.'});
	});
});

BeastActions.load.listen(function(beastId) {
	var url;

	url = '/api/beasts/' + beastId;

	$.get(url)
		.then(this.completed)
		.fail(this.failed);
});

export default BeastActions;
