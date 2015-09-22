import { Router, Route } from 'react-router';
import SelectBackground from './select_background';
import history from '../history';

import BackgroundsStore from '../stores/backgroundsStore';

import CharacterCreatorApp from './character_creator_app.jsx';
import TestRoute from './test_route';

var routes;

routes = (
	<Router history={history} component={CharacterCreatorApp}>
		<Route path='/characters/new' component={SelectBackground}/>
		<Route path='/characters/new/step2' component={TestRoute} />
	</Router>
);

export default routes;
