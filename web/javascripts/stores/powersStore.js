import Reflux from 'reflux';
import _ from 'lodash';
import PowersActions from '../actions/powersActions';

var PowersStore;

PowersStore = Reflux.createStore({
	init() {
		this.listenToMany(PowersActions);
		this.state = {
			powers: [],
			selected: [],
			maxSelected: 3
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state;
	},

	onLoadCompleted(data) {
		this.state.powers = data.data;
		this.trigger(this.state);
	},

	onSelectPower(power) {
		if (this.selected(power)) {
			_.remove(this.state.selected, function(selectedPower) {
				return selectedPower === power;
			});
			this.trigger(this.state);
			return;
		}

		if (!this.maxSelected()) {
			this.state.selected.push(power);
			this.trigger(this.state);
			return;
		}
	},

	selected(power) {
		return _.includes(this.state.selected, power);
	},

	maxSelected() {
		return !(this.state.selected.length < this.state.maxSelected);
	}
});

export default PowersStore;
