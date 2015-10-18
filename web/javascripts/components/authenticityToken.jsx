import React from 'react';
import $ from 'jquery';

var Token;

Token = React.createClass({
	render: function() {
		var csrf_param, csrf_token;

		csrf_param = $('meta[name=csrf-param]').attr('content');
		csrf_token = $('meta[name=csrf-token]').attr('content');

		return (
			<input type='hidden' value={csrf_token} name={csrf_param} />
		);
	}
});

export default Token;
