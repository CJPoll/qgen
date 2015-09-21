import { Router } from 'react-router';
import React from 'react';
import routes from './components/router';

window.$(document).ready(function() {
	React.render(routes, document.body);
});
