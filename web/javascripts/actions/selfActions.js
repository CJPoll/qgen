import Reflux from 'reflux';

var SelfActions;

SelfActions = Reflux.createActions({
	clear: {asyncResult: false, sync: true},
	load: {asyncResult: true},
	loaded: {asyncResult: false, sync: true}
});

SelfActions.load.listen(function() {
	var url;

	url = '/api/self';

	return $.get(url)
		.then(this.completed)
		.fail(this.failed);
});

export default SelfActions;
