import React from 'react';

var ButtonGroup = React.createClass({
	render() {
		return (
			<div className='btn-group'>
				{this.props.children}
			</div>
		);
	}
});

export default ButtonGroup;
