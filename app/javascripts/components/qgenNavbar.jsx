import React from 'react';
import Reflux from 'reflux';

import SelfStore from 'app/javascripts/stores/selfStore';

import { Navbar, NavbarItem, LeftNav, RightNav, NavDropdown } from './navbar';
import LoginButton from './sign_in';

var QgenNavbar;

QgenNavbar = React.createClass({
	mixins: [Reflux.connect(SelfStore, 'currentUser')],

	render() {
		return (
			<Navbar>
				<LeftNav>
					<NavbarItem path='/characters'>
						My Characters
					</NavbarItem>

					<NavbarItem path='/campaigns'>
						My Campaigns
					</NavbarItem>

					<NavbarItem path='/characters/new'>
						<span className="glyphicon glyphicon-plus"></span>
						&nbsp;
						Character
					</NavbarItem>

					<NavbarItem path='/campaigns/new'>
						<span className="glyphicon glyphicon-plus"></span>
						&nbsp;
						Campaign
					</NavbarItem>
				</LeftNav>

				<RightNav>
					<li>
						<LoginButton userData={this.state.currentUser}/>
					</li>
					<NavDropdown path='#'>
						<li>
							<a href='#'>Action</a>
						</li>
						<li role='separator' className='divider'></li>
						<li>
							<a href='/users/edit'>My Account</a>
						</li>
					</NavDropdown>
				</RightNav>
			</Navbar>
		);
	}
});

export default QgenNavbar;
