import React from 'react';

import QgenNavbar from 'app/javascripts/components/qgenNavbar';

var Layout;

Layout = React.createClass({
	render() {
		return (
			<div>
				<QgenNavbar />
				<div className='container-fluid'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Layout;
