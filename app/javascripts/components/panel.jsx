import React from 'react';

export var Panel, PanelTitle, PanelBody;

Panel = React.createClass({
	render() {
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

PanelTitle = React.createClass({
	render() {
		return (
			<div className='panel-heading'>
				{this.props.children}
			</div>
		);
	}
});

PanelBody = React.createClass({
	render() {
		return (
			<div className='panel-body'>
				{this.props.children}
			</div>
		);
	}
});

export default Panel;
