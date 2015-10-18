import React from 'react';

import panelStyles from 'web/stylesheets/panel.scss';

export var Panel, PanelTitle, PanelBody;

Panel = React.createClass({
	render() {
		var className;

		if (this.props.active) {
			className = panelStyles.selectedPanel;
		} else {
			className = panelStyles.selectablePanel;
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
			<div className={panelStyles.panelTitle}>
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
