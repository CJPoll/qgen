import Reflux from 'reflux';

var NewCharacterActions;

NewCharacterActions = Reflux.createActions([
	'selectCampaign',
	'confirmCharacter',
	'changeFirstName',
	'changeLastName'
]);

export default NewCharacterActions;
