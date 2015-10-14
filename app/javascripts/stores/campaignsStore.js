import Reflux from 'reflux';
import CampaignsActions from '../actions/campaignsActions';

var CampaignsStore;

CampaignsStore = Reflux.createStore({
	init() {
		this.listenToMany(CampaignsActions);
		this.state = {
			campaigns: []
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.campaigns;
	},

	onLoadCompleted(data) {
		this.state.campaigns = data;
		this.trigger(this.state.campaigns);
	},

	onLoadFailed(e) {
		return e;
	}
});

export default CampaignsStore;
