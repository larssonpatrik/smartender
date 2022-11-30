import { API_KEY } from "./APIConfig";

// SEARCH FUNCTIONS
export function searchAPICall(searchQuery) {
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
      "https://the-cocktail-db.p.rapidapi.com/search.php" + queryString,
      options
    )
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}

export function searchDrinkByName(searchQuery) {
  return searchAPICall({ s: searchQuery });
}

export function searchIngredientByName(searchQuery) {
  return searchAPICall({ i: searchQuery });
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
