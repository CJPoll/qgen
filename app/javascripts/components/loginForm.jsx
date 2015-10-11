import React from 'react';

import generalStyles from 'app/stylesheets/general.scss';
import buttonStyles from 'app/stylesheets/buttons.scss';
import AuthenticityToken from 'app/javascripts/components/authenticityToken';

var LoginForm;

LoginForm = React.createClass({
	render: function() {
		return (
			<form className='login-form' action='/users/sign_in' acceptCharset='UTF-8' method='POST'>
				<AuthenticityToken />
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
