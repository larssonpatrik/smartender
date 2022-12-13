import FavoritesView from "../views/SearchResultsView";
import React from "react";
import resolvePromise from "../resolvePromise";
import { searchDrinkByName } from "../DrinkSource";
import promiseNoData from "../promiseNoData";
import { useParams } from "react-router-dom";

export default function FavoritesPresenter(props) {
  return (
    <div 
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    
        <FavoritesView/>
    </div>
  );
}

