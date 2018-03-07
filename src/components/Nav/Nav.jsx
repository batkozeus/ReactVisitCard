import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends React.Component {
	state = {
		isActive: false
	};

	// componentWillMount() {
	// 	this.setState({
	// 		isActive: false
	// 	});
	// };


	handleClick = (evt) => {
		// console.log(evt.target);
		console.log(this.props.to);

		this.setState({
			isActive: true
		});
	};

	render() {
		const { to, myKey, text } = this.props;

		const headerCls = classNames({
			'Navigation__link': true,
			'Navigation__link--active': this.state.isActive
		});

		return (
			<Link to={to} className={headerCls}  onClick={this.handleClick} key={myKey}>{text}</Link>
		);
	}
}

Nav.PropTypes = {
	activeState: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	key: PropTypes.string.isRequired
}

export default Nav;