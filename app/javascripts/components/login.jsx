import React from 'react';
import { Panel, PanelTitle, PanelBody } from 'app/javascripts/components/panel';

import LoginForm from 'app/javascripts/components/loginForm';

var Login;

Login = React.createClass({
	propTypes: {
		csrf_param: React.PropTypes.string.isRequired,
		csrf_token: React.PropTypes.string.isRequired
	},

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
