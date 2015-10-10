import Reflux from 'reflux';

var CampaignActions;

CampaignActions = Reflux.createActions({
	load: {asyncResult: true}
});

CampaignActions.load.listen(function(campaignId) {
	var data, url;

	url = '/api/campaigns/' + campaignId;

	data = {
		dataType: 'json'
	}

	$.get(url, data)
		.then(this.completed)
		.then(this.failed);
});

export default CampaignActions;
