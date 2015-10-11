import React from 'react';
import $ from 'jquery';

import QGenNavbar from 'app/javascripts/components/qgenNavbar';
import Login from 'app/javascripts/components/login';

window.$ = $;
window.jquery = $;
window.jQuery = $;

$(document).ready(function() {
	React.render(
		React.createElement(QGenNavbar),
		document.getElementById('navbar')
	);

	React.render(
		React.createElement(Login),
		document.getElementById('app')
	);
});
