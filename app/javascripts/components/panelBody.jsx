/** @jsx React.DOM */
define(function() {
	var React, PanelBody;

	React = require('react');

	PanelBody = React.createClass({
		render: function() {
			return (
				<div className='panel-body'>
					{this.props.children}
				</div>
			)
		}
	});

	return PanelBody;
})
