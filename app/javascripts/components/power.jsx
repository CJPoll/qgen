import React from 'react';

import Panel from './panel';
import PanelTitle from './panelTitle';
import PanelBody from './panelBody';

import PowersActions from '../actions/powersActions';
import PowersStore from '../stores/powersStore';

var Power;

Power = React.createClass({
	handleClick() {
		var power = this.props.power;
		PowersActions.selectPower(this.props.power);
	},

	render() {
		var type = 'primary';
		if (PowersStore.selected(this.props.power)) {
			type = 'success';
		}
		return (
			<div className='tiled'>
				<Panel type={type} onClick={this.handleClick}>
					<PanelTitle>
						{this.props.power.name}
					</PanelTitle>
					<PanelBody>
						{this.props.power.description}
					</PanelBody>
				</Panel>
			</div>
		);
	}
});

export default Power;
