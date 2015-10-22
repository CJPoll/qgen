import React from 'react';
import { Panel, PanelTitle, PanelBody } from 'web/javascripts/components/panel';

import LoginForm from 'web/javascripts/components/loginForm';

var Login;

Login = React.createClass({
	render: function() {
		return (
			<div className='login'>
				<Panel>
					<PanelTitle>
						Log In
					</PanelTitle>
					<PanelBody>
						<LoginForm />
					</PanelBody>
				</Panel>
			</div>
		);
	}
})

export default Login;
