import React from 'react';

// users/auth/slack/callback
var SlackLogin;

SlackLogin = React.createClass({
	render() {
		return (
			<a href="/users/auth/slack">
				<img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/>
			</a>
		);
	}
});

export default SlackLogin;
