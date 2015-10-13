import Reflux from 'reflux';

var SelfActions;

SelfActions = Reflux.createActions({
	load: {asyncResult: true}
});

SelfActions.load.listen(function() {
	var url;

	url = '/api/users/self';

	$.get(url)
		.then(this.completed)
		.fail(this.failed);
});

export default SelfActions;
