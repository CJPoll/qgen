import Reflux from 'reflux';

var PowersActions;

PowersActions = Reflux.createActions({
	load: {asyncResult: true},
	selectPower: {asyncResult: false}
});

PowersActions.load.listen(function() {
	var url, self;

	self = this;
	url = '/powers.json';

	$.getJSON(url)
		.then(data => self.completed(data));
});

export default PowersActions;
