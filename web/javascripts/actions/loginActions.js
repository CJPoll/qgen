import Reflux from 'reflux';
import $ from 'jquery';
import history from 'web/javascripts/history';

import NotificationsActions from 'web/javascripts/actions/notificationsActions';
import SelfActions from 'web/javascripts/actions/selfActions';

var LoginActions;

LoginActions = Reflux.createActions({
	changeEmail: {asyncResult: false},
	changePassword: {asyncResult: false},
	submit: {asyncResult: true}
});

LoginActions.submit.listen(function(user) {
	var url, data;

	url = '/api/login';

	data = {
		user: user,
		dataType: 'json'
	};

	$.post(url, data)
		.then(function(result) {
			SelfActions.loaded(result.data);
			history.pushState(null, '/');
		})
		.fail(function(result) {
			NotificationsActions.addError({message: 'Couldn\'t log in with those credentials'});
		});
});

export default LoginActions;
