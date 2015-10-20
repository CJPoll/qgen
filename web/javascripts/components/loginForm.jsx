import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';

import LoginActions from 'web/javascripts/actions/loginActions';
import LoginStore from 'web/javascripts/stores/loginStore';

import { Link } from 'react-router';

import generalStyles from 'web/stylesheets/general.scss';
import buttonStyles from 'web/stylesheets/buttons.scss';
import AuthenticityToken from 'web/javascripts/components/authenticityToken';

import SlackLogin from 'web/javascripts/components/slackLogin';

var LoginForm;

LoginForm = React.createClass({
	mixins: [Reflux.connect(LoginStore, 'user')],

	handleSubmit(e) {
		e.preventDefault();
		LoginActions.submit(this.state.user);
	},

	handleChangeEmail(e) {
		LoginActions.changeEmail(e.target.value);
	},

	handleChangePassword(e) {
		LoginActions.changePassword(e.target.value);
	},

	render: function() {
		return (
			<form className='login-form' action='/login' acceptCharset='UTF-8' method='POST'>
				<AuthenticityToken />
				<SlackLogin />
				<div className='form-group'>
					<label> Email </label>
					<input type='email' autofocus name='user[email]' className={generalStyles.textInput} onChange={this.handleChangeEmail} />
				</div>
				<div className='form-group'>
					<label> Password </label>
					<input name='user[password]' type='password' className={generalStyles.textInput} onChange={this.handleChangePassword} />
				</div>
				<div className='form-group'>
					<input type='submit' className={buttonStyles.primaryButton} onClick={this.handleSubmit} />
				</div>
				<div>
					<Link to='/register'> Sign Up? </Link>
				</div>
				<div>
					<a href='/users/password/new'> Forgot your password? </a>
				</div>
			</form>
		)
	}
});

export default LoginForm;
