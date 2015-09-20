/** @jsx React.DOM */

define(function() {
	'use strict';

	var React, Dashboard, CreateCharacterButton;

	React = require('react');
	CreateCharacterButton = require('./createCharacter');

	Dashboard = React.createClass({
		render() {
			return <CreateCharacterButton />;
		}
	});

	return Dashboard;
});
