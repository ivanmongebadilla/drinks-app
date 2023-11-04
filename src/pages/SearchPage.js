import { useQuery } from "@tanstack/react-query";
import CocktailsIntroSection from "../Cocktails/CocktailsIntroSection";
import { useRef, useState, useEffect } from "react";
import { fetchCocktails } from "../util/http";
import FavoriteCards from '../components/FavoriteCards';
import { Link } from "react-router-dom";

const SearchPage = (props) => {
    const searchElement = useRef();
    const [searchTerm, setSearchTerm] = useState();
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        setSearchType(props.type)
    }, [props.type])

    const { data, isLoading, isError } = useQuery({
        queryKey: ['cocktails', { search: searchTerm }],
        queryFn: ({ signal }) => fetchCocktails({ signal, searchTerm, searchType }),
        enabled: searchTerm !== undefined
    })

    const searchHandler = (event) => {
        event.preventDefault();
        if (searchType !== 'Search Random') {
            setSearchTerm(searchElement.current.value)
        } else {
            setSearchTerm(Math.random().toString(36).slice(2, 7));
        }
    }

    let pageContent;
    let dataContent = null

    if (props.type === "Search Random") {
        pageContent = (
            <form className="searchsection__form" onSubmit={searchHandler}>
                <button className="searchsection__button">Search Random</button>
                <button type="button" className="searchsection__button">
                    <Link to="/">Go Back</Link>
                </button>
            </form>
        )
    } else {
        pageContent = (
            <form className="searchsection__form" onSubmit={searchHandler}>
                <input className="searchsection__input" type="text" placeholder={props.type} ref={searchElement}/>
                <button className="searchsection__button">Search</button>
                <button type="button" className="searchsection__button">
                    <Link to="/">Go Back</Link>
                </button>
            </form>
        )
    }

    if (isLoading) {
        dataContent = <p>Loading data...</p>
    }

    if (isError) {
        dataContent = <p>There has been an error while featching data, try later</p>
    }

    if (data) {
        console.log(data)
        if (data.drinks === null) {
            dataContent = <h3>Nothing was find with your search</h3>
        } else {
            dataContent = (
                data.drinks.map((drink) => <FavoriteCards drinkId={drink.idDrink} key={drink.idDrink}/>)
            )
        }
    }

    return (
        <>
            <CocktailsIntroSection />
            <section className="searchsection margin_btm">
                <div className="searchsection__container">
                    <h3 className="searchsection__title">{props.type}</h3>
                    <div>
                        {pageContent}
                    </div>
                    <div className='favoritesection__items'>
                        {dataContent}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchPage;