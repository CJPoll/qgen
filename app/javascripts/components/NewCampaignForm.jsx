import React from 'react';
import FormGroup from './formGroup';
import Panel from './panel';
import PanelBody from './panelBody';
import PanelTitle from './panelTitle';
import SubmitButton from './submit';
import AuthenticityToken from './authenticityToken';

var CampaignForm;

CampaignForm = React.createClass({
	propTypes: {
		campaign: React.PropTypes.object
	},

	render() {
		var heading;

		if (this.props.campaign) {
			heading = 'Edit ' + this.props.campaign.name;
		} else {
			heading = 'New Campaign';
		}
		return (
			<div>
				<Panel>
					<PanelTitle>
						{heading}
					</PanelTitle>
					<PanelBody>
						<form action='/campaigns' method='POST'>
							<AuthenticityToken />
							<FormGroup>
								<label htmlFor='campaign[name]'>
									Name
								</label>
								<input name='campaign[name]' type='text' className='text-input'/>
							</FormGroup>

							<SubmitButton />
						</form>
					</PanelBody>
				</Panel>
			</div>
		);
	}
});

export default CampaignForm;
