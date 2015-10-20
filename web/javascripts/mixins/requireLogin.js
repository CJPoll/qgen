import SelfStore from 'web/javascripts/stores/selfStore';
import history from 'web/javascripts/history';

var requireLogin = {
	componentWillMount() {
		if (!SelfStore.loggedIn()) {
			history.replaceState(null, '/login');
		}
	}
};

export default requireLogin;
