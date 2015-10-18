import $ from 'jquery';

var getAuthentictyToken;

getAuthentictyToken = function(data) {
	var csrfParam, csrfToken;

	csrfParam = $('meta[name=csrf-param]').attr('content');
	csrfToken = $('meta[name=csrf-token]').attr('content');

	data[csrfParam] = csrfToken;

	return data;
}

export default getAuthentictyToken;
