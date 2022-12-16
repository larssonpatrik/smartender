import { API_KEY } from "./APIConfig";

// AVAILABLE ENDPOINTS
const endpoints = {
  search: "search.php",
  filter: "filter.php",
  list: "list.php",
  lookup: "lookup.php",
  random: "random.php",
  popular: "popular.php",
  latest: "latest.php",
};

// GENERAL CALL FOR ALL CALLS
export function APICall(endpoint, searchQuery) {
  function throwError() {
    throw new Error("Something went nuts! Try again!");
  }
  function treatHTTPResponseACB(resp) {
    return resp.status === 200 ? resp.json() : throwError();
  }

  let queryString = "?" + new URLSearchParams(searchQuery).toString();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  return new Promise(async function createPromiseACB(resolve, reject) {
    function resolvePromiseACB(res) {
      resolve(res);
    }

    function rejectPromiseACB(err) {
      reject(err);
    }

    return fetch(
      "https://the-cocktail-db.p.rapidapi.com/" + endpoint + queryString,
      options
    )
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}

// SEARCH FUNCTIONS
export function searchDrinkByName(searchQuery) {
  return APICall(endpoints.search, { s: searchQuery });
}

export function searchIngredientByName(searchQuery) {
  return APICall(endpoints.search, { i: searchQuery });
}

// FILTER FUNCTIONS
export function filterDrinkByIngridient(searchQuery) {
  return APICall(endpoints.filter, { i: searchQuery });
}

export function filterDrinkByMultiIngridient(searchQuery) {
  return APICall(endpoints.filter, { i: searchQuery });
}

export function filterDrinkByCategory(searchQuery) {
  return APICall(endpoints.filter, { c: searchQuery });
}

export function filterIngredientByAlcoholic(searchQuery) {
  return APICall(endpoints.filter, { a: searchQuery });
}

// LIST FUNCTIONS
export function listIngredients() {
  return APICall(endpoints.list, { i: "list" });
}

export function listCategories() {
  return APICall(endpoints.list, { c: "list" });
}

export function listGlasses() {
  return APICall(endpoints.list, { g: "list" });
}

export function listAlcoholics() {
  return APICall(endpoints.list, { a: "list" });
}

// GET FUNCTIONS
export function getDrinkById(id) {
  return APICall(endpoints.lookup, { i: id });
}

// RANDOM DRINK
export function getRandomDrink() {
  return APICall(endpoints.random);
}

// MOST POPULAR
export function getPopularDrinks() {
  return APICall(endpoints.popular);
}

// LATEST
export function getLatestDrinks() {
  return APICall(endpoints.latest);
}
