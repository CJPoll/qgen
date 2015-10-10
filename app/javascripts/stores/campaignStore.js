import Reflux from 'reflux';

import CampaignActions from 'app/javascripts/actions/campaignActions';

var CampaignStore;

CampaignStore = Reflux.createStore({
	init() {
		this.listenToMany(CampaignActions);
		this.state = {
			campaign: {
				user: {},
				players: [],
				characters: []
			}
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.campaign;
	},

	onLoadCompleted(data) {
		this.state.campaign = data;
		this.trigger(this.state.campaign);
	}
});

export default CampaignStore;
