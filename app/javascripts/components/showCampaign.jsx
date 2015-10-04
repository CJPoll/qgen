import React from 'react';
import _ from 'lodash';

var ShowCampaign;

ShowCampaign = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object.isRequired,
		owner: React.PropTypes.object.isRequired,
		players: React.PropTypes.array
	},

	renderPlayers() {
		var players;

		players = _.map(this.props.players, player => (
			<li>
				{player.email}
			</li>
		));

		if (players.length === 0) {
			players = <li> Nobody is playing this campaign yet! </li>;
		}

		return players;
	},

	render() {
		var campaign, owner;

		campaign = this.props.campaign;
		owner = this.props.owner;

		return (
			<Panel>
				<PanelTitle>
					{campaign.name}
				</PanelTitle>
				<PanelBody>
					<h2> Owner </h2>
					<ul>
						<li>
							{owner.email}
						</li>
					</ul>

					<h2> Players </h2>
					<ul>
						{this.renderPlayers()}
					</ul>
				</PanelBody>
			</Panel>
		)
	}
});

export default ShowCampaign;
