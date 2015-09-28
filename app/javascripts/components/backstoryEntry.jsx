import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import BackstoryActions from '../actions/backstoryActions';
import BackstoryStore from '../stores/backstoryStore';

var BackstoryEntry;

BackstoryEntry = React.createClass({
	mixins: [Reflux.connect(BackstoryStore, 'backstory')],

	handleKeyUp(e) {
		BackstoryActions.setBackstory(e.target.value);
	},

	render() {
		return (
			<div className='slide'>
				<h1> Backstory </h1>
				<p> Enter whatever backstory you would like for your character to have </p>
				<div>
					<textarea onChange={this.handleKeyUp} onKeyUp={this.handleKeyUp}
					 value={this.state.backstory.backstory} className='textarea'/>
			 </div>
				<Link to='/characters/new/step4' className='submit'> Move On </Link>
			</div>
		)
	}
});

export default BackstoryEntry;
