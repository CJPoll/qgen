import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import FormGroup from './formGroup';
import UserSearchStore from '../stores/userSearch';
import UserSearchActions from '../actions/userSearchActions';

var UserSearch, UserSearchResults;

UserSearchResults = React.createClass({
	mixins: [Reflux.connect(UserSearchStore, 'searchResults')],

	proptypes: {
		onSelectUser: React.PropTypes.func.isRequired
	},

	handleClick(e) {
		var resultId, result;

		resultId = e.target.getAttribute('data-result');
		result = _.find(this.state.searchResults.results, searchResult => searchResult.id === parseInt(resultId));

		this.props.onSelectUser(result);
	},

	render() {
		var results;

		results = _.map(this.state.searchResults.results, function(result) {
			var key = 'search_result_' + result.id;

			return (
				<li key={key} className='no-dot'>
					<span className="glyphicon glyphicon-plus add-person" onClick={this.handleClick.bind(this, result)} data-result={result.id} ></span>
					&nbsp;
					{result.first_name + ' ' + result.last_name}
				</li>
			);
		}.bind(this));

		return (
			<div onClick={this.handleClick}>
				<div>
					&nbsp;
				</div>
				<ul>
					{results}
				</ul>
			</div>
		);
	}
});

UserSearch = React.createClass({
	proptypes: {
		onSelectUser: React.PropTypes.func.isRequired
	},

	onSearch(event) {
		var searchTerm = event.target.value;
		UserSearchActions.search(searchTerm);
	},

	render() {
		return (
			<FormGroup>
				<label htmlFor='user_search'>
					Add Player
				</label>
				<input type='search' className='text-input' onChange={this.onSearch} />
				<UserSearchResults onSelectUser={this.props.onSelectUser}/>
			</FormGroup>
		);
	}
});

export default UserSearch;
