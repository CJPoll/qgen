import React from 'react';

var FluidContainer;

FluidContainer = React.createClass({
	render() {
		return (
			<div className='container-fluid'>
				{this.props.children}
			</div>
		);
	}
});

export default FluidContainer;
