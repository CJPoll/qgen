import Reflux from 'reflux';

var NewCharacterActions;

NewCharacterActions = Reflux.createActions([
	'confirmCharacter',
	'changeFirstName',
	'changeLastName'
]);

export default NewCharacterActions;
