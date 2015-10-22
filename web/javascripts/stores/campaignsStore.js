import Reflux from 'reflux';
import CampaignsActions from '../actions/campaignsActions';
import NotificationsActions from 'web/javascripts/actions/notificationsActions';

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
		this.state.campaigns = data.data;
		this.trigger(this.state.campaigns);
	},

	onLoadFailed(e) {
		NotificationsActions.addError({message: 'Couldn\'t load campaigns'})
	}
});

export default CampaignsStore;
