import { Router, Route } from 'react-router';
import React from 'react';
import SelectBackground from './select_background';
import history from '../history';

import BackgroundsStore from '../stores/backgroundsStore';

import CharacterCreator from './characterCreator';
import NameSelector from './nameSelect';
import PowerSelect from './power_select';
import Backstory from './backstoryEntry';
import CharacterConfirmationPage from './characterConfirmationPage';
import TestRoute from './test_route';

var routes;

routes = (
	<Router history={history}>
		<Route path='/characters' component={CharacterCreator}>
			<Route path='new' component={NameSelector} />
			<Route path='new/backgrounds' component={SelectBackground}/>
			<Route path='new/powers' component={PowerSelect} />
			<Route path='new/backstory' component={Backstory} />
			<Route path='new/confirm' component={CharacterConfirmationPage} />
			<Route path='new/step4' component={TestRoute} />
		</Route>
	</Router>
);

export default routes;
