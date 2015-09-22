import { Router, Route } from 'react-router';
import SelectBackground from './select_background';
import history from '../history';

import BackgroundsStore from '../stores/backgroundsStore';

import CharacterCreator from './characterCreator';
import TestRoute from './test_route';

var routes;

routes = (
	<Router history={history}>
		<Route path='/characters' component={CharacterCreator}>
			<Route path='new' component={SelectBackground}/>
			<Route path='new/step2' component={TestRoute} />
		</Route>
	</Router>
);

export default routes;
