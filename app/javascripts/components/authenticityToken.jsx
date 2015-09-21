import React from 'react';
var Token;

Token = React.createClass({
	propTypes: {
		csrf_param: React.PropTypes.string.isRequired,
		csrf_token: React.PropTypes.string.isRequired
	},
	render: function() {
		return (
			<input type='hidden' value={this.props.csrf_token} name={this.props.csrf_param}/>
		);
	}
});

export default Token;
