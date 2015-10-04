import React from 'react';
import { Navbar, NavbarItem, LeftNav, RightNav, NavDropdown } from './navbar';
import LoginButton from './sign_in';

var QgenNavbar;

QgenNavbar = React.createClass({
	render() {
		return (
			<Navbar>
				<LeftNav>
					<NavbarItem path='/characters'>
						My Characters
					</NavbarItem>

					<NavbarItem path='/characters/new'>
						New Character
					</NavbarItem>

					<NavbarItem path='/campaigns/new'>
						Create Campaign
					</NavbarItem>

					<NavbarItem path='/campaigns'>
						My Campaigns
					</NavbarItem>
				</LeftNav>

				<RightNav>
					<li>
						<LoginButton userData={this.props.userData}/>
					</li>
					<NavDropdown path='#'>
						<li>
							<a href='#'>Action</a>
						</li>
						<li>
							<a href='#'>Another action</a>
						</li>
						<li>
							<a href='#'>Something else here</a>
						</li>
						<li role='separator' className='divider'></li>
						<li>
							<a href='#'>Separated link</a>
						</li>
					</NavDropdown>
				</RightNav>
			</Navbar>
		);
	}
});

export default QgenNavbar;
