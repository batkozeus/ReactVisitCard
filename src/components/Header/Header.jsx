import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav';


class Header extends React.Component {

	render() {
		const { items, text } = this.props;

		return (
			<header className="Header">
				<h1 className="Header__logo"><Link exact to="/">{text}</Link></h1>
				<nav className="Navigation">
					{items.map((i,idx) => (
						<HeaderNav to={i.path} myKey={idx} text={i.text} />
						))}
				</nav>
			</header>
		);
	}
}

Header.propTypes = {
	items: propTypes.arrayOf(propTypes.shape({
		path: propTypes.string.isRequired,
		text: propTypes.string.isRequired
	}).isRequired).isRequired
}

export default Header;