import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav';


class Header extends React.Component {

	render() {
		const { items, text } = this.props;

		return (
			<header className="Header">
				<h1 className="Header__logo">{text}</h1>
				<nav className="Navigation">
					{items.map(i => (
						<Nav to={i.path} onClick={this.handleClick} myKey={i.text} text={i.text} />
						))}
				</nav>
			</header>
		);
	}
}

Header.PropTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default Header;