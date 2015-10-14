import { Router, Route, IndexRoute } from 'react-router';
import React from 'react';

import BackgroundsStore from '../stores/backgroundsStore';

import history from 'app/javascripts/history';

import CharacterCreator from './characterCreator';
import NameSelector from './nameSelect';
import BackgroundSelector from 'app/javascripts/components/backgroundSelector';
import PowerSelect from './powerSelect';
import Backstory from './backstoryEntry';
import CharacterConfirmationPage from './characterConfirmationPage';

import Layout from 'app/javascripts/components/layout';
import Dashboard from 'app/javascripts/components/dashboard';
import CharactersIndex from 'app/javascripts/components/charactersIndex';
import ShowCharacter from 'app/javascripts/components/showCharacter';
import CampaignsIndex from 'app/javascripts/components/campaignsIndex';
import ShowCampaign from 'app/javascripts/components/showCampaign';
import NewCampaign from 'app/javascripts/components/newCampaign';
import EditCampaign from 'app/javascripts/components/editCampaign';

import Login from 'app/javascripts/components/login';

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
		</Route>
	</Router>
);

//routes = (
//	<Router history={history}>
//		<Route path='/characters' component={CharacterCreator}>
//			<Route path='new' component={NameSelector} />
//			<Route path='new/backgrounds' component={SelectBackground}/>
//			<Route path='new/powers' component={PowerSelect} />
//			<Route path='new/backstory' component={Backstory} />
//			<Route path='new/confirm' component={CharacterConfirmationPage} />
//			<Route path='new/step4' component={TestRoute} />
//		</Route>
//	</Router>
//);

export default routes;
