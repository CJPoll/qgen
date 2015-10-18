import { Router, Route, IndexRoute } from 'react-router';
import React from 'react';

import BackgroundsStore from '../stores/backgroundsStore';

import history from 'web/javascripts/history';

import CharacterCreator from './characterCreator';
import NameSelector from './nameSelect';
import BackgroundSelector from 'web/javascripts/components/backgroundSelector';
import PowerSelect from './powerSelect';
import Backstory from './backstoryEntry';
import CharacterConfirmationPage from './characterConfirmationPage';

import Layout from 'web/javascripts/components/layout';
import Dashboard from 'web/javascripts/components/dashboard';
import CharactersIndex from 'web/javascripts/components/charactersIndex';
import ShowCharacter from 'web/javascripts/components/showCharacter';
import CampaignsIndex from 'web/javascripts/components/campaignsIndex';
import ShowCampaign from 'web/javascripts/components/showCampaign';
import NewCampaign from 'web/javascripts/components/newCampaign';
import EditCampaign from 'web/javascripts/components/editCampaign';

import Bestiary from 'web/javascripts/components/bestiary';
import NewBeast from 'web/javascripts/components/newBeast';
import ShowBeast from 'web/javascripts/components/showBeast';

import Login from 'web/javascripts/components/login';

var routes;

routes = (
	<Router history={history}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Dashboard}/>
			<Route path='characters' component={CharactersIndex} />
			<Route path='characters/new' component={CharacterCreator} >
				<IndexRoute component={NameSelector} />
				<Route path='backgrounds' component={BackgroundSelector} />
				<Route path='powers' component={PowerSelect} />
				<Route path='backstory' component={Backstory} />
				<Route path='confirm' component={CharacterConfirmationPage} />
			</Route>
			<Route path='characters/:characterId' component={ShowCharacter} />

			<Route path='campaigns' component={CampaignsIndex} />
			<Route path='campaigns/:campaignId/edit' component={EditCampaign} />
			<Route path='campaigns/new' component={NewCampaign} />
			<Route path='campaigns/:campaignId' component={ShowCampaign} />

			<Route path='/beasts' component={Bestiary} />
			<Route path='/beasts/new' component={NewBeast} />
			<Route path='/beasts/:beastId' component={ShowBeast} />
		</Route>
	</Router>
);

export default routes;
