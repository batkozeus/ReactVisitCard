import React from 'react';
import propTypes from 'prop-types';
import './SearchCategories.css';


const listCategoriesButtons = {
	'001': {
		id: 'popular',
		title: 'popular'
	},
	'002': {
		id: 'top_rated',
		title: 'top rated'
	},
	'003': {
		id: 'upcoming',
		title: 'upcoming'
	}	
};

class SearchCategories extends React.Component {
	static propTypes = {
		onSetSearchValues: propTypes.func.isRequired
	};

	state = {
		isChosen: 'popular'
	};

	_searchValues = (evt) => {
		this.props.onSetSearchValues(evt.target.id);

		this.setState({
			isChosen: evt.target.id
		});
	};

	render() {
		return (
			<div className="SearchCategories">
				{Object.keys(listCategoriesButtons).map(key => {
					if (listCategoriesButtons[key].id === this.state.isChosen) {
						return (<button className="SearchCategories__btn SearchCategories__btn--active" id={listCategoriesButtons[key].id} onClick={this._searchValues}>{listCategoriesButtons[key].title}</button>)
					}
					else {
						return (<button className="SearchCategories__btn" id={listCategoriesButtons[key].id} onClick={this._searchValues}>{listCategoriesButtons[key].title}</button>)
					}
				}			
				)}
			</div>		
		);
	}


}

export default SearchCategories;