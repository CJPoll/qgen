import React from 'react';

var FormGroup = React.createClass({
	render() {
		return (
			<div className='form-group'>
				{this.props.children}
			</div>
		);
	}
});

export default FormGroup;
