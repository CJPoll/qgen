import React from 'react';
import Panel from './panel';
import PanelBody from './panelBody';
import PanelTitle from './panelTitle';

var Background;

Background = React.createClass({
	propTypes: {
		background: React.PropTypes.object.isRequired
	},

	render() {
		var extraClasses = ['tiled']
		return (
			<Panel extraClasses={extraClasses}>
				<PanelTitle>
					{this.props.background.name}
				</PanelTitle>
				<PanelBody>
					{this.props.background.description}
				</PanelBody>
			</Panel>
		);
	}
});

export default Background;
