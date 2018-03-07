import React from 'react';
import propTypes from 'prop-types';
import './WatchList.css';
import WatchlistCard from '../WatchlistCard/WatchlistCard';

class WatchList extends React.Component {
	static propTypes = {
		watchlist: propTypes.arrayOf(propTypes.shape({
			id: propTypes.string.isRequired,
			title: propTypes.string.isRequired,
			text: propTypes.string.isRequired,
			rating: propTypes.number.isRequired,
			release: propTypes.number.isRequired,
			poster: propTypes.string.isRequired
		}).isRequired).isRequired,
		DeleteMovieCardToMovieList: propTypes.func.isRequired	
	};

	render() {
		const { watchlist, DeleteMovieCardToMovieList } = this.props;

		if (watchlist.length === 0) {
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					<p className="WatchList__msg">Add movies to watchlist...</p>
					{watchlist.map((list) => (<WatchlistCard key={list.id} DeleteMovieCard={() => {DeleteMovieCardToMovieList(list.id);}} {...list}/>))}
				</div>		
			);			
		}

		else {
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					{watchlist.map((list) => (<WatchlistCard key={list.id} DeleteMovieCard={() => {DeleteMovieCardToMovieList(list.id);}} {...list}/>))}
				</div>	
			);
		}
	
	}
}

export default WatchList;