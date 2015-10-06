import Reflux from 'reflux';
import $ from 'jquery';

var CampaignsActions;

CampaignsActions = Reflux.createActions({
	load: {asyncResult: true}
});

CampaignsActions.load.listen(function() {
	var url;

	url = '/campaigns.json';

	$.get(url)
		.then(this.completed)
		.fail(this.failed)
});

export default CampaignsActions;
