import React from 'react';
var Panel;

Panel = React.createClass({
	render: function() {
		var className;

		if (this.props.active) {
			className = 'panel selected-panel';
		} else {
			className = 'panel selectable-panel';
		}

		return (
			<div className={className} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		);
	}
});

export default Panel;
