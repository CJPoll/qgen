/** @jsx React.DOM */
define(function() {
  var React, LoginButton;

  React = require('react');
  LoginButton = React.createClass({
    propTypes: {
      userData: React.PropTypes.object
    },

    render: function() {
      var user = this.props.userData;

      if (user !== null && user !== undefined) {
        return (
          <LogoutButton />
        );
      }

      return (
        <a href="/users/sign_in"> Sign In </a>
      );
    }
  });

  return LoginButton;
});
