import Reflux from 'reflux';
import $ from 'jquery';

var UserSearchActions;

UserSearchActions = Reflux.createActions({
	search: {asyncResult: true},
	clear: {asyncResult: false}
});

UserSearchActions.search.listen(function(searchTerm) {
	var url, data;

	url = '/api/users/search';
	data = {
		query: searchTerm
	};

	$.get(url, data)
		.then(this.completed)
		.then(this.failed);
});

export default UserSearchActions;
