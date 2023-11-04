import '../style/style.css'
import FavoriteCards from '../components/FavoriteCards';

const favorites = ['11000', '11001', '11002', '11003', '11004', '11005', '11006', '11007']

const Favorites = () => {

    return (
        <section className='favoritesection'>
            <div className='favoritesection__container'>
                <h3 className='favoritesection__title'>Favorite Cocktails</h3>
                <div className='favoritesection__items'>
                    {favorites.map((id) => <FavoriteCards drinkId={id} key={id}/>)}
                </div>
            </div>
        </section>
    )
}

export default Favorites;