import '../style/style.css'
// import img from '../assets/ezgif.com-webp-to-jpg.jpg'

const CocktailsIntroSection = () => {
    return (
        <section
            className='introsection'
        >
            {/* <img className='introsection__img' src={img} /> */}
            <div className='introsection__content'>
                <h1 className='introsection__content--title'>Find your Favorite Cocktail</h1>
                <h3 className='introsection__content--text'>You can search for amazing drinks and cocktails from around the world.</h3>
                <button className='introsection__content--btn'>Search Cockatils</button>
            </div>
        </section>
    )
}

export default CocktailsIntroSection;