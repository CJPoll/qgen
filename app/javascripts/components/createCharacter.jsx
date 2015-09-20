/** @jsx React.DOM */
define(function() {
	'use strict';

	var React, CreateCharacterButton;

	React = require('react');

	CreateCharacterButton = React.createClass({
		render() {
			return (
				<a href='/characters/new' className='create-character'>
					<span className="glyphicon glyphicon-plus"></span>
					&nbsp;
					Create Character
				</a>
			);
		}
	});

	return CreateCharacterButton;
});
