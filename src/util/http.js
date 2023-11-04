export const fetchCocktails = async ({searchTerm, searchType, signal}) => {
    let url;  

    if (searchType === "Search by Name") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchTerm;
    } else if (searchType === "Search by Ingridient") {
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
    } else if (searchType === "Search Random") {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    }
    
    // const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`, { signal })
    const response = await fetch(url, { signal })

    console.log(searchType)

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the cocktails');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const cocktails = await response.json();

    return cocktails;
}

export async function fetchDrink({ id, signal }) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, { signal });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the event');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const cocktail = await response.json();
  
    return cocktail;
  }