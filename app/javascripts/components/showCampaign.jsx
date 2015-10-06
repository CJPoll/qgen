import React from 'react';
import _ from 'lodash';

import ButtonToolbar from './buttonToolbar';
import ButtonGroup from './buttonGroup';
import EditCampaignButton from './editCampaignButton';

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
					<ButtonToolbar>
						<ButtonGroup>
							<EditCampaignButton campaign={campaign}>
								<span className="glyphicon glyphicon-edit"></span>
								&nbsp;
								Edit
							</EditCampaignButton>
						</ButtonGroup>
					</ButtonToolbar>
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
