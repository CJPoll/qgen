import React from 'react';

var Row;

Row = React.createClass({
	render() {
		return (
			<div className='row'>
				{this.props.children}
			</div>
		);
	}
});

export default Row;
