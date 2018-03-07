import React from 'react';
import './MoviesPageSidebar.css';


class MoviesPageSidebar extends React.Component {
	render() {
		return (
			<div className="MoviesPage__sidebar">
				{this.props.children}
			</div>
			
		);
	}
}

export default MoviesPageSidebar;