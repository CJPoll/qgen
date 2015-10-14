import React from 'react';
import Reflux from 'reflux';

import NotificationsStore from 'app/javascripts/stores/notificationsStore';

import Notifications from 'app/javascripts/components/notifications';
import QgenNavbar from 'app/javascripts/components/qgenNavbar';
import FluidContainer from 'app/javascripts/components/fluidContainer';

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
