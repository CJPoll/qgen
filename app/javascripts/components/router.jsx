import { Router, Route } from 'react-router';
import CharacterCreator from './character_creator';
import Thing from './thing';

var routes;

routes = (
	<Router>
		<Route path='/' component={CharacterCreator} >
		</Route>
		<Route path='thing' component={Thing} />
	</Router>
);

export default routes;
