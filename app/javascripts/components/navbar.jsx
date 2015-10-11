import React from 'react';
import styles from 'app/stylesheets/navbar.scss';

import history from 'app/javascripts/history';

export var Navbar, NavbarItem, LeftNav, RightNav, NavDropdown;

NavbarItem = React.createClass({
	propTypes: {
		path: React.PropTypes.string.isRequired
	},

	handleClick(e) {
		e.preventDefault();
		history.pushState(null, this.props.path);
	},

	render() {
		var path, className;

		className = styles.navItem;
		path = window.location.pathname;

		if (path === this.props.path) {
			className = styles.activeNavItem;
		}

		return (
			<li className={className}>
				<a to={this.props.path} onClick={this.handleClick}> {this.props.children} </a>
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
	handleClick(e) {
		e.preventDefault();
		history.pushState(null, this.props.path);
	},

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
						<a className='navbar-brand' href='/' onClick={this.handleClick}>QGen</a>
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
