import React from 'react';

import generalStyles from 'web/stylesheets/general.scss';
import buttonStyles from 'web/stylesheets/buttons.scss';
import AuthenticityToken from 'web/javascripts/components/authenticityToken';

import SlackLogin from 'web/javascripts/components/slackLogin';

var LoginForm;

LoginForm = React.createClass({
	render: function() {
		return (
			<form className='login-form' action='/users/sign_in' acceptCharset='UTF-8' method='POST'>
				<AuthenticityToken />
				<SlackLogin />
				<div className='form-group'>
					<label> Email </label>
					<input type='email' autofocus name='user[email]' className={generalStyles.textInput}/>
				</div>
				<div className='form-group'>
					<label> Password </label>
					<input name='user[password]' type='password' className={generalStyles.textInput} />
				</div>
				<div className='form-group'>
					<input type='submit' className={buttonStyles.primaryButton} />
				</div>
				<div>
					<a href='/users/sign_up'> Sign Up? </a>
				</div>
				<div>
					<a href='/users/password/new'> Forgot your password? </a>
				</div>
			</form>
		)
	}
});

export default LoginForm;
