import $ from 'jquery';

import React from 'react';
import QGenNavbar from 'app/javascripts/components/qgenNavbar';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('bootstrap-sass/assets/javascripts/bootstrap.min');

$(document).ready(function() {
	React.render(
		React.createElement(QGenNavbar),
		document.getElementById('navbar')
	);
});
