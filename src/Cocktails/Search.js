import random from '../assets/barman-equipmencocktailbar.jpg';
import ingredient from '../assets/ingredients.jpg';
import name from '../assets/rum-and-orange-cocktail.jpg';
import { Link } from 'react-router-dom';

const Search = (props) => {
    return (
        <section className="searchsection">
            <div className="searchsection__container">
                <h3 className="searchsection__title">Search Cocktails</h3>
                <div className='searchsection__CardContainer'>
                    <div className="searchsection__card--container">
                        <div className="favoritecard__img">
                            <img src={name} alt="Cocktail" width="60%"/>
                        </div>
                        <div className="favoritecard__info">
                            <h3>Search by Cocktail Name</h3>
                        </div>
                        <button className="favoritecard__btn" onClick={() => props.searchType("Search by Name")}>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>
                    <div className="searchsection__card--container">
                        <div className="favoritecard__img">
                            <img src={ingredient} alt="Cocktail" width="60%"/>
                        </div>
                        <div className="favoritecard__info">
                            <h3>Search by Ingredient Name</h3>
                        </div>
                        <button className="favoritecard__btn" onClick={() => props.searchType("Search by Ingridient")}>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>
                    <div className="searchsection__card--container">
                        <div className="favoritecard__img">
                            <img src={random} alt="Cocktail" width="60%"/>
                        </div>
                        <div className="favoritecard__info">
                            <h3>Get Random Cocktail</h3>
                        </div>
                        <button className="favoritecard__btn" onClick={() => props.searchType("Search Random")}>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;