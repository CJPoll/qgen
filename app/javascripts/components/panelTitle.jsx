/** @jsx React.DOM */
define(function() {
	var React, PanelTitle;

	React = require('react');

	PanelTitle = React.createClass({
		render: function() {
			return (
				<div className='panel-heading'>
					{this.props.children}
				</div>
			)
		}
	});

	return PanelTitle;
});
