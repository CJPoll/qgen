import React from 'react';

// users/auth/slack/callback
var SlackLogin;

SlackLogin = React.createClass({
	render() {
		return (
			<a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=2528280221.12537519110">
				<img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/>
			</a>
		);
	}
});

export default SlackLogin;
