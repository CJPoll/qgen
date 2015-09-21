define(function() {
  var React, LogoutButton;

  React = require('react');
  LogoutButton = React.createClass({
    render: function() {
      return (
        <a href="/users/sign_out" data-method="delete"> Sign Out </a>
      );
    }
  });

  return LogoutButton;
})
