import React from 'react';
import Reflux from 'reflux';

import NotificationsStore from 'web/javascripts/stores/notificationsStore';

import Notifications from 'web/javascripts/components/notifications';
import QgenNavbar from 'web/javascripts/components/qgenNavbar';
import FluidContainer from 'web/javascripts/components/fluidContainer';

var Layout;

Layout = React.createClass({
	mixins: [Reflux.connect(NotificationsStore, 'messages')],

	render() {
		return (
			<div>
				<QgenNavbar />
				<FluidContainer>
					<Notifications warnings={this.state.messages.warnings} errors={this.state.messages.errors} successes={this.state.messages.successes} />
				</FluidContainer>
				<FluidContainer>
					{this.props.children}
				</FluidContainer>
			</div>
		);
	}
});

export default Layout;
