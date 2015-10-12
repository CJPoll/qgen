import React from 'react';

import generalStyles from 'app/stylesheets/general.scss';
import buttonStyles from 'app/stylesheets/buttons.scss';

import { Panel, PanelTitle, PanelBody } from 'app/javascripts/components/panel';
import FormGroup from 'app/javascripts/components/formGroup';
import AuthenticityToken from 'app/javascripts/components/authenticityToken';

var SignUp;

SignUp = React.createClass({
	render() {
		return (
			<Panel>
				<PanelTitle>
					Sign Up
				</PanelTitle>
				<PanelBody>
					<form method='POST' action="/users">
						<AuthenticityToken />
						<FormGroup>
							<label htmlFor='user[first_name]'> First Name </label>
							<input type='text' name='user[first_name]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[last_name]'> Last Name </label>
							<input type='text' name='user[last_name]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[email]'> Email </label>
							<input type='text' name='user[email]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[password]'> Password </label>
							<input type='password' name='user[password]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[password_confirmation]'> Password Confirmation </label>
							<input type='password' name='user[password_confirmation]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<input type='submit' value='Sign Up' className={buttonStyles.primaryButton} />
						</FormGroup>
					</form>
				</PanelBody>
			</Panel>
		)
	}
});

export default SignUp;
