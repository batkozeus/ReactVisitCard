import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css';


class HeaderNav extends React.Component {

	render() {
		const { to, myKey, text } = this.props;

		return (
			<NavLink exact to={to} className="Navigation__link" activeClassName="Navigation__link--active" key={myKey}>{text}</NavLink>
		);
	}
}

HeaderNav.propTypes = {
	to: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	myKey: propTypes.string.isRequired
}

export default HeaderNav;