import Reflux from 'reflux';

var CharacterActions;

CharacterActions = Reflux.createActions([
	'confirmCharacter',
	'changeFirstName',
	'changeLastName',
	'selectCampaign'
]);

export default CharacterActions;
