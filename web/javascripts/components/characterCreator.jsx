import React from 'react';
import QgenNavbar from './qgenNavbar';

import CampaignsStore from 'web/javascripts/stores/campaignsStore';

var CharacterCreator;

CharacterCreator = React.createClass({
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

export default CharacterCreator;
