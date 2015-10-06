import Reflux from 'reflux';
import CampaignsActions from '../actions/campaignsActions';

var CampaignsStore;

CampaignsStore = Reflux.createStore({
	init() {
		this.listenToMany(CampaignsActions);
		this.state = {
			campaigns: [{
				id: '',
				name: 'No Campaign'
			}]
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state;
	},

	onLoadCompleted(data) {
		this.state.campaigns = this.state.campaigns.concat(data);
		this.trigger(this.state);
	},

	onLoadFailed(e) {
		return e;
	}
});

export default CampaignsStore;
