import React from 'react';

var ButtonToolbar;

ButtonToolbar = React.createClass({
	render() {
		return (
			<div className='btn-toolbar' role='toolbar'>
				{this.props.children}
			</div>
		);
	}
});

export default ButtonToolbar;
