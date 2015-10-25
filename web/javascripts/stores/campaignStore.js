import Reflux from 'reflux';

import CampaignActions from 'web/javascripts/actions/campaignActions';

var CampaignStore;

CampaignStore = Reflux.createStore({
	listenables: [CampaignActions],

	init() {
		this.state = {
			campaign: {
				owner: {},
				players: [],
				characters: []
			}
		};
	},

	getInitialState() {
		if (this.state === undefined || this.state === null) {
			this.init();
		}

		return this.state.campaign;
	},

	onLoadCompleted(campaign) {
		this.state.campaign = campaign.data;
		this.state.campaign.players = campaign.data.players.data;
		this.trigger(this.state.campaign);
	},

	onAddPlayer(user) {
		var players = this.state.campaign.players

		if (user === null || user === undefined) {
			return;
		}

		players.push(user);
		players = _.uniq(players, false, 'id');

		this.state.campaign.players = players;
		this.trigger(this.state.campaign);
	},

	onChangeName(name) {
		this.state.campaign.name = name;
		this.trigger(this.state.campaign);
	},

	onClear() {
		this.init();
		this.trigger(this.state.campaign);
	}
});

export default CampaignStore;
