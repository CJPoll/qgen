import React from 'react';
import _ from 'lodash';

import ButtonToolbar from './buttonToolbar';
import ButtonGroup from './buttonGroup';
import EditCampaignButton from './editCampaignButton';

var ShowCampaign, EditCampaign;

EditCampaign = React.createClass({
	propTypes: {
		editable: React.PropTypes.bool,
		campaign: React.PropTypes.object.isRequired
	},

	render() {
		var campaign = this.props.campaign;

		return (
			<ButtonToolbar>
				<ButtonGroup>
					<EditCampaignButton campaign={campaign}>
						<span className="glyphicon glyphicon-edit"></span>
						&nbsp;
						Edit
					</EditCampaignButton>
				</ButtonGroup>
			</ButtonToolbar>
		);
	}
});

ShowCampaign = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object.isRequired,
		owner: React.PropTypes.object.isRequired,
		players: React.PropTypes.array,
		editable: React.PropTypes.bool
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
		var campaign, owner, editButton;

		campaign = this.props.campaign;
		owner = this.props.owner;
		editButton = <div></div>;

		if (this.props.editable) {
			editButton = <EditCampaign campaign={campaign} />;
		}

		return (
			<Panel>
				<PanelTitle>
					{campaign.name}
				</PanelTitle>
				<PanelBody>
					{editButton}
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
