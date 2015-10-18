import Reflux from 'reflux';

var BackgroundsActions;

BackgroundsActions = Reflux.createActions({
	load: {asyncResult: true},
	selectBackground: {asyncResult: false}
});

BackgroundsActions.load.listen(function() {
	var url, data;

	url = '/api/backgrounds';
	data = {dataType: 'json'}

	$.getJSON(url, data)
		.then(this.completed);
});

export default BackgroundsActions;
