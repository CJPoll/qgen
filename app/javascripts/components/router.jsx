import { Router, Route } from 'react-router';
import SelectBackground from './select_background';

import BackgroundsStore from '../stores/backgroundsStore';

var routes;

routes = (
	<Router>
		<Route path='/' component={SelectBackground} />
	</Router>
);

export default routes;
