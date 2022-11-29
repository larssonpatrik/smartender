import { API_KEY } from "./APIConfig";

// SEARCH FUNCTIONS
export function searchAPICall(searchQuery) {
  let queryString = "?" + new URLSearchParams(searchQuery).toString();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  return fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php" + queryString,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("SEARCH API", response);
    })
    .catch((err) => console.error(err));
}

export function searchDrinkByName(searchQuery) {
  searchAPICall({ s: searchQuery });
}

export function searchIngredientByName(searchQuery) {
  searchAPICall({ i: searchQuery });
}

// FILTER FUNCTIONS
export function filterAPICall(searchQuery) {
  let queryString = "?" + new URLSearchParams(searchQuery).toString();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  return fetch(
    "https://the-cocktail-db.p.rapidapi.com/filter.php" + queryString,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log("FILTER API", response))
    .catch((err) => console.error(err));
}

export function filterDrinkByIngridient(searchQuery) {
  filterAPICall({ i: searchQuery });
}

export function filterDrinkByCategory(searchQuery) {
  filterAPICall({ c: searchQuery });
}

export function filterIngredientByAlcoholic(searchQuery) {
  filterAPICall({ a: searchQuery });
}

// LIST FUNCTIONS
export function listAPICall(searchQuery) {
  let queryString = "?" + new URLSearchParams(searchQuery).toString();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  return fetch(
    "https://the-cocktail-db.p.rapidapi.com/list.php" + queryString,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log("LIST API", response))
    .catch((err) => console.error(err));
}

export function listIngredients() {
  listAPICall({ i: "list" });
}
