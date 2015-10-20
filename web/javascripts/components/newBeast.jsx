import React from 'react';

import { Panel, PanelTitle, PanelBody } from 'web/javascripts/components/panel';
import BeastForm from 'web/javascripts/components/beastForm';
import requireLogin from 'web/javascripts/mixins/requireLogin';

var NewBeast;

NewBeast = React.createClass({
	mixins: [requireLogin],

	render() {
		return (
			<Panel>
				<PanelTitle>
					New Beast
				</PanelTitle>

				<PanelBody>
					<BeastForm />
				</PanelBody>
			</Panel>
		);
	}
});

export default NewBeast;
