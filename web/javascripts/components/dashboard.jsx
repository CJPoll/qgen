import React from 'react';
import Reflux from 'reflux';

import CampaignsStore from 'web/javascripts/stores/campaignsStore';
import CharactersStore from 'web/javascripts/stores/charactersStore';

import CampaignsList from './campaignsList';
import CharactersList from './charactersList';

var Dashboard;

Dashboard = React.createClass({
	mixins: [
		Reflux.connect(CampaignsStore, 'campaigns'),
		Reflux.connect(CharactersStore, 'characters')
	],

	propTypes: {
	},

	render() {
		return (
			<div>
				<h2> My Campaigns </h2>
				<CampaignsList campaigns={this.state.campaigns} />

				<h2> My Characters </h2>
				<CharactersList characters={this.state.characters} />
			</div>
		);
	}
});

export default Dashboard;
