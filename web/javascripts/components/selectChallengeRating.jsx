import React from 'react';
import generalStyles from 'web/stylesheets/general';

var SelectChallengeRating;

SelectChallengeRating = React.createClass({
	render() {
		return (
			<select className={generalStyles.select} onChange={this.props.onChange}>
				<option value='easy'> Easy </option>
				<option value='moderate'> Moderate </option>
				<option value='challenging'> Challenging </option>
				<option value='epic'> Epic </option>
			</select>
		);
	}
});

export default SelectChallengeRating;
