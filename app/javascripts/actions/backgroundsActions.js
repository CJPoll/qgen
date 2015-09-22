import Reflux from 'reflux';

var BackgroundsActions;

BackgroundsActions = Reflux.createActions({
	load: {asyncResult: true},
	selectBackground: {asyncResult: false}
});

BackgroundsActions.load.listen(function() {
	var url, self;

	url = '/backgrounds.json';
	self = this

	$.getJSON(url)
		.then((data) => self.completed(data));
});

export default BackgroundsActions;
