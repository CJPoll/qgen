import Reflux from 'reflux';

var BeastsActions;

BeastsActions = Reflux.createActions({
	load: {asyncResult: true}
});

BeastsActions.load.listen(function() {
	var url;

	url = '/api/beasts';

	$.get(url, {dataType: 'json'})
		.then(this.completed)
		.fail(this.failed)
});

export default BeastsActions;
