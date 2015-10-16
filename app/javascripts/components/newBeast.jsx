import React from 'react';

import { Panel, PanelTitle, PanelBody } from 'app/javascripts/components/panel';
import BeastForm from 'app/javascripts/components/beastForm';

var NewBeast;

NewBeast = React.createClass({
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
