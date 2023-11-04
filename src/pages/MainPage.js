import { Fragment } from "react"
import CocktailsIntroSection from "../Cocktails/CocktailsIntroSection"
import Favorites from "../Cocktails/Favorites"
import Search from "../Cocktails/Search"


const MainPage = (props) => {
    return (
        <Fragment>
            <CocktailsIntroSection />
            <Favorites />
            <Search searchType={props.searchTypeFunc}/>
        </Fragment>
    )
}

export default MainPage;