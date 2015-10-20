import React from 'react';
import QgenNavbar from './qgenNavbar';

import CampaignsStore from 'web/javascripts/stores/campaignsStore';
import requireLogin from 'web/javascripts/mixins/requireLogin';

var CharacterCreator;

CharacterCreator = React.createClass({
	mixins: [requireLogin],

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

export default CharacterCreator;
