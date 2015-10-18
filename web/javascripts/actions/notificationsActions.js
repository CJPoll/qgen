import Reflux from 'reflux';

var ErrorActions;

ErrorActions = Reflux.createActions([
	'addError',
	'addWarning',
	'addSuccess',
	'removeError',
	'removeWarning',
	'removeSuccess'
]);

export default ErrorActions;
