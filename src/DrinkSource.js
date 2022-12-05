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
      "https://the-cocktail-db.p.rapidapi.com/filter.php" + queryString,
      options
    )
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}

export function filterDrinkByIngridient(searchQuery) {
  return filterAPICall({ i: searchQuery });
}

export function filterDrinkByCategory(searchQuery) {
  return filterAPICall({ c: searchQuery });
}

export function filterIngredientByAlcoholic(searchQuery) {
  return filterAPICall({ a: searchQuery });
}

// LIST FUNCTIONS
export function listAPICall(searchQuery) {
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
      "https://the-cocktail-db.p.rapidapi.com/list.php" + queryString,
      options
    )
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}

export function listIngredients() {
  return listAPICall({ i: "list" });
}

export function listCategories() {
  return listAPICall({ c: "list" });
}

export function listGlasses() {
  return listAPICall({ g: "list" });
}

export function listAlcoholics() {
  return listAPICall({ a: "list" });
}

// LOOKUP FUNCTIONS
export function lookUpAPICall(searchQuery) {
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
      "https://the-cocktail-db.p.rapidapi.com/lookup.php" + queryString,
      options
    )
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}

export function getDrinkById(id) {
  return lookUpAPICall({ i: id });
}

// RANDOM DRINK API CALL
export function getRandomDrink() {
  function throwError() {
    throw new Error("Something went nuts! Try again!");
  }
  function treatHTTPResponseACB(resp) {
    return resp.status === 200 ? resp.json() : throwError();
  }

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

    return fetch("https://the-cocktail-db.p.rapidapi.com/random.php", options)
      .then(treatHTTPResponseACB)
      .then(resolvePromiseACB)
      .catch(rejectPromiseACB);
  });
}
