import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import CampaignStore from 'app/javascripts/stores/campaignStore';
import CampaignActions from 'app/javascripts/actions/campaignActions';

import ButtonToolbar from './buttonToolbar';
import ButtonGroup from './buttonGroup';
import EditCampaignButton from './editCampaignButton';
import DeleteCampaignButton from './deleteCampaignButton';

import { Panel, PanelTitle, PanelBody } from 'app/javascripts/components/panel';

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
					<DeleteCampaignButton campaign={campaign}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</DeleteCampaignButton>
				</ButtonGroup>
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
	mixins: [Reflux.connect(CampaignStore, 'campaign')],

	componentWillMount() {
		CampaignActions.load(this.props.params.campaignId);
	},

	renderPlayers(campaign) {
		var players;

		players = _.map(campaign.players, player => (
			<li>
				{player.first_name + ' ' + player.last_name}
			</li>
		));

		if (players.length === 0) {
			players = <li> Nobody is playing this campaign yet! </li>;
		}

		return players;
	},

	renderCharacters(campaign) {
		var characters;

		characters = _.map(campaign.characters, character => (
			<li>
				{character.first_name + ' ' + character.last_name}
			</li>
		));

		if (characters.length === 0) {
			characters = <li> Nobody has made characters for this campaign yet! </li>;
		}

		return characters;
	},

	render() {
		var campaign, owner, editButton;

		campaign = this.state.campaign;
		owner = campaign.user;
		editButton = <EditCampaign campaign={campaign} />;

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
						{this.renderPlayers(campaign)}
					</ul>

					<h2> Characters </h2>

					<ul>
						{this.renderCharacters(campaign)}
					</ul>

				</PanelBody>
			</Panel>
		)
	}
});

export default ShowCampaign;
