/** @jsx React.DOM */
define(function() {
	var React, Login;

	React = require('react');

	Login = React.createClass({
		propTypes: {
			csrf_param: React.PropTypes.string.isRequired,
			csrf_token: React.PropTypes.string.isRequired
		},

		render: function() {
			var title = 'Log In';
			return (
				<div className='login'>
					<Panel>
						<PanelTitle>
							Log In
						</PanelTitle>
						<PanelBody>
              <LoginForm csrf_param={this.props.csrf_param} csrf_token={this.props.csrf_token} />
						</PanelBody>
					</Panel>
				</div>
			);
		}
	})

	return Login;
});
