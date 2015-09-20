/** @jsx React.DOM */
define(function() {
	var React, LoginForm;

	React = require('react');

  LoginForm = React.createClass({
    render: function() {
      return (
        <form className='login-form' action='/users/sign_in' acceptCharset='UTF-8' method='POST'>
          <AuthenticityToken csrf_param={this.props.csrf_param}
                     csrf_token={this.props.csrf_token} />
          <div className='form-group'>
            <label> Email </label>
            <input type='email' autofocus name='user[email]' className='text-input'/>
          </div>
          <div className='form-group'>
            <label> Password </label>
            <input name='user[password]' type='password' className='text-input' />
          </div>
          <div className='form-group'>
            <input type='submit' className='submit' />
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

  return LoginForm;
});
