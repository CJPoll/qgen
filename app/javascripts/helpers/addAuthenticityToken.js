import $ from 'jquery';
import _ from 'lodash';

var getAuthentictyToken;

getAuthentictyToken = function(data) {
	var csrfParam, csrfToken, extendedObject;

	csrfParam = $('meta[name=csrf-param]').attr('content');
	csrfToken = $('meta[name=csrf-token]').attr('content');

	data[csrfParam] = csrfToken;

	return data;
}

export default getAuthentictyToken;
