import React from 'react';
import $ from 'jquery';
import history from 'web/javascripts/history';

import NotificationsActions from 'web/javascripts/actions/notificationsActions'

import generalStyles from 'web/stylesheets/general.scss';
import buttonStyles from 'web/stylesheets/buttons.scss';
import addAuthenticityToken from 'web/javascripts/helpers/addAuthenticityToken';

import { Panel, PanelTitle, PanelBody } from 'web/javascripts/components/panel';
import FormGroup from 'web/javascripts/components/formGroup';
import AuthenticityToken from 'web/javascripts/components/authenticityToken';

var SignUp;

SignUp = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		var url, data;

		url = '/api/register';

		data = {
			dataType: 'json',
			user: {
				first_name: $('#first_name').val(),
				last_name: $('#last_name').val(),
				email: $('#email').val(),
				password: $('#password').val()
			}
		};

		$.post(url, data)
		.then(function(response) {
			history.pushState(null, '/dashboard');
		})
		.fail(function(response) {
			NotificationsActions.addError({message: 'Couldn\'t log in with those credentials'});
		});
	},

	render() {
		return (
			<Panel>
				<PanelTitle>
					Sign Up
				</PanelTitle>
				<PanelBody>
					<form method='POST' action="/api/register">
						<AuthenticityToken />
						<FormGroup>
							<label htmlFor='user[first_name]'> First Name </label>
							<input type='text' name='user[first_name]' className={generalStyles.textInput} id='first_name'/>
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[last_name]'> Last Name </label>
							<input type='text' name='user[last_name]' className={generalStyles.textInput} id='last_name' />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[email]'> Email </label>
							<input type='text' name='user[email]' className={generalStyles.textInput} id='email' />
						</FormGroup>
						<FormGroup>
							<label htmlFor='user[password]'> Password </label>
							<input type='password' name='user[password]' className={generalStyles.textInput} id='password' />
						</FormGroup>
						<FormGroup>
							<label htmlFor='password_confirmation'> Password Confirmation </label>
							<input type='password' name='user[password_confirmation]' className={generalStyles.textInput} />
						</FormGroup>
						<FormGroup>
							<input type='submit' value='Sign Up' className={buttonStyles.primaryButton} onClick={this.handleSubmit}/>
						</FormGroup>
					</form>
				</PanelBody>
			</Panel>
		)
	}
});

export default SignUp;
