import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import generalStyles from 'web/stylesheets/general.scss';

import FormGroup from './formGroup';
import UserSearchStore from '../stores/userSearch';
import UserSearchActions from '../actions/userSearchActions';

var UserSearch, UserSearchResults;

UserSearchResults = React.createClass({
	mixins: [Reflux.connect(UserSearchStore, 'searchResults')],

	proptypes: {
		onSelectUser: React.PropTypes.func.isRequired
	},

	handleClick(user) {
		this.props.onSelectUser(user);
	},

	render() {
		var results;

		results = _.map(this.state.searchResults.results, function(result) {
			var key = 'search_result_' + result.id;

			return (
				<li key={key} className='no-dot' onClick={this.handleClick.bind(this, result)}>
					<span className="glyphicon glyphicon-plus add-person" ></span>
					&nbsp;
					{result.first_name + ' ' + result.last_name}
				</li>
			);
		}.bind(this));

		return (
			<div>
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
				<input type='search' className={generalStyles.textInput} onChange={this.onSearch} />
				<UserSearchResults onSelectUser={this.props.onSelectUser}/>
			</FormGroup>
		);
	}
});

export default UserSearch;
