define(function() {
	var React, Panel;

	React = require('react');

	Panel = React.createClass({
		render: function() {
			var classes = 'panel';

			if (this.props.type) {
				classes += ' panel-' + this.props.type;
			}

			return (
				<div className={classes} onClick={this.props.onClick}>
					{this.props.children}
				</div>
			);
		}
	});

	return Panel;
});
