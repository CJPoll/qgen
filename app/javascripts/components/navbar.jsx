import React from 'react';
import styles from 'app/stylesheets/navbar.scss';

export var Navbar, NavbarItem, LeftNav, RightNav, NavDropdown;

NavbarItem = React.createClass({
	propTypes: {
		path: React.PropTypes.string.isRequired
	},

	render() {
		var path, className;

		className = '';
		path = window.location.pathname;

		if (path === this.props.path) {
			className = 'active';
		}

		return (
			<li className={className}>
				<a href={this.props.path}> {this.props.children} </a>
			</li>
		);
	}
});

LeftNav = React.createClass({
	render() {
		return (
			<ul className={styles.leftNavbarList}>
				{this.props.children}
			</ul>
		);
	}
});

RightNav = React.createClass({
	render() {
		return (
			<ul className={styles.rightNavbarList}>
				{this.props.children}
			</ul>
		);
	}
});

NavDropdown = React.createClass({
	propTypes: {
		path: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<li className='dropdown'>
				<a href={this.props.path} className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown <span className='caret'></span></a>
				<ul className='dropdown-menu'>
					{this.props.children}
				</ul>
			</li>
		);
	}
});

Navbar = React.createClass({
	render: function() {
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
							<span className='sr-only'>Toggle
								navigation</span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<a className='navbar-brand' href='/'>QGen</a>
					</div>
					<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
						{this.props.children}
					</div>
				</div>
			</nav>
		);
	}
});

export default Navbar;
