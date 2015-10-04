import React from 'react';
import CreateCharacterButton from './createCharacter';
import { Panel, PanelTitle, PanelBody } from './panel';
import ButtonGroup from './buttonGroup';
import ButtonToolbar from './buttonToolbar';
import CreateCampaignButton from './createCampaignButton';
import CampaignsList from './campaignsList';
import CharactersList from './charactersList';

var Dashboard;

Dashboard = React.createClass({
	propTypes: {
		campaigns: React.PropTypes.array.isRequired,
		characters: React.PropTypes.array.isRequired
	},

	render() {
		return (
			<Panel>
				<PanelTitle>
					Dashboard
				</PanelTitle>
				<PanelBody>
					<ButtonToolbar>
						<ButtonGroup>
							<CreateCharacterButton />
						</ButtonGroup>
						<ButtonGroup>
							<CreateCampaignButton />
						</ButtonGroup>
					</ButtonToolbar>

					<h2> My Campaigns </h2>
					<CampaignsList campaigns={this.props.campaigns} />

					<h2> My Characters </h2>
					<CharactersList characters={this.props.characters} />
				</PanelBody>
			</Panel>
		);
	}
});

export default Dashboard;
