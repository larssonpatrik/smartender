export default class UserModel {
  constructor(favoriteDrinks = [], loggedIn = false) {
    this.observers = [];
    this.favoriteDrinks = favoriteDrinks;
    this.loggedIn = false;
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    function callbackFinderCB(cb) {
      return cb !== callback;
    }
    this.observers = this.observers.filter(callbackFinderCB);
  }

  notifyObservers(payload) {
    function invokeObserverCB(observer) {
      try {
        observer(payload);
      } catch (error) {
        console.error(error);
      }
    }
    this.observers.forEach(invokeObserverCB);
  }

  addToFavorites(addedDrinkId) {
    let duplicateChecker = false;

    function checkSameId(drinkId) {
      if (addedDrinkId === drinkId) {
        duplicateChecker = true;
      }
    }

    // Checks for duplicates, does not allow!
    this.favoriteDrinks.forEach(checkSameId);

    if (!duplicateChecker) {
      this.favoriteDrinks = [...this.favoriteDrinks, addedDrinkId];
      this.notifyObservers({ addedDrink: addedDrinkId });
    }
  }

  removeFromFavorites(removedDrinkId) {
    let drinkInFavorites = false;

    function checkForDuplicatesCB(drinkId) {
      if (removedDrinkId === drinkId) {
        drinkInFavorites = true;
      }
    }

    function filterByIdCB(drinkId) {
      return removedDrinkId !== drinkId;
    }

    // Checks for duplicates, does not allow!
    this.favoriteDrinks.forEach(checkForDuplicatesCB);

    if (drinkInFavorites) {
      this.favoriteDrinks = this.favoriteDrinks.filter(filterByIdCB);
      this.notifyObservers({ removedDrink: removedDrinkId });
    }
  }
}
