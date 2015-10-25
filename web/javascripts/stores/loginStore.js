import Reflux from 'reflux';
import LoginActions from 'web/javascripts/actions/loginActions';

var LoginStore;

LoginStore = Reflux.createStore({
	listenables: [LoginActions],

	init() {
		this.state = {
			user: {
				email: '',
				password: ''
			}
		};
	},

	getInitialState() {
		if (this.state === undefined) {
			this.init();
		}

		return this.state.user;
	},

	onChangeEmail(email) {
		this.state.user.email = email;
		this.trigger(this.state.user);
	},

	onChangePassword(password) {
		this.state.user.password = password;
		this.trigger(this.state.user);
	}
});

export default LoginStore;
