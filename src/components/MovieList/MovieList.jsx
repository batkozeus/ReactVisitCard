import React from 'react';
import propTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
	static propTypes = {
		movieCards: propTypes.arrayOf(propTypes.shape({
			id: propTypes.string.isRequired,
			title: propTypes.string.isRequired,
			text: propTypes.string.isRequired,
			rating: propTypes.number.isRequired,
			release: propTypes.number.isRequired,
			poster: propTypes.string.isRequired
		}).isRequired).isRequired,
		AddMovieCardToMovieList: propTypes.func.isRequired,
		getEmptyCard: propTypes.number.isRequired		
	};

	render() {
		const { movieCards, AddMovieCardToMovieList, getEmptyCard } = this.props;

		if (getEmptyCard !== 0) {
			return (
				<div className="MovieList">
					{movieCards.map((movies) => (<div className="MovieList__item" key={movies.id}><MovieCard AddMovieCard={() => {AddMovieCardToMovieList(movies);}} {...movies}/></div>))}
				</div>
			);
		}

		else {
			return (
				<div className="MovieList">
					{movieCards.map((movies) => (<div className="MovieList__item" key={movies.id}><MovieCard AddMovieCard={() => {AddMovieCardToMovieList(movies);}} {...movies}/></div>))}
					<p className="MovieList__msg">Sorry, we didn't find anything</p>
				</div>
			);
		}

		
	}
}

export default MovieList;