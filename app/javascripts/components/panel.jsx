/** @jsx React.DOM */
define(function() {
	'use strict';

	var React, Panel;

	React = require('react');

	Panel = React.createClass({
		render: function() {
			return (
				<div className='panel panel-primary' onClick={this.props.onClick}>
					{this.props.children}
				</div>
			);
		}
	});

	return Panel;
});
