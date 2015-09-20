/** @jsx React.DOM */
define(function() {
	'use strict';

	var React, Token;

	React = require('react');

	Token = React.createClass({
		propTypes: {
			csrf_param: React.PropTypes.string.isRequired,
			csrf_token: React.PropTypes.string.isRequired
		},
		render: function() {
			return (
				<input type='hidden' value={this.props.csrf_token} name={this.props.csrf_param}/>
			);
		}
	});

	return Token;
});
