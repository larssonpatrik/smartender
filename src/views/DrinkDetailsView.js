import React, { useState } from "react";
import "./css/DrinkDetails.css";
import { HeadingOne, HeadingTwo } from "../components/Headings";
import { Paragraph } from "../components/TextBodies";
import Spacer from "../components/Spacer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {getAuth} from "firebase/auth"

export default function DrinkDetailsView(props) {
  const [activeFavorite, setActiveFavorite] = useState(false);
  const loggedIn = getAuth().currentUser ? true : false;

  function clickOnHeartACB() {
    if (activeFavorite === false) {
      props.addFavoriteFunc(props.drinks[0]?.idDrink);
      setActiveFavorite(true);
    } else if (activeFavorite === true) {
      props.removeFavoriteFunc(props.drinks[0]?.idDrink);
      setActiveFavorite(false);
    }
  }

  React.useEffect(() => {
    function isInFavoritesCB(favId) {
      if (props.drinks[0].idDrink === favId) {
        setActiveFavorite(true);
      }
    }
    props.favorites.map(isInFavoritesCB);
  }, []);

  return (
    <div>
      <div className="detailsContainer">
        <img
          className="drinkImg"
          src={props.drinks[0].strDrinkThumb}
          alt="drink"
          height={500}
        />

        <div className="content">
          <HeadingOne>{props.drinks[0].strDrink}</HeadingOne>
          <Spacer size={3} />

          <div className="ingredientInfo">
            <HeadingTwo>Ingredients</HeadingTwo>
            <Spacer size={1} />
            <Paragraph>
              {props.drinks[0].strIngredient1}: {props.drinks[0].strMeasure1}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient2}: {props.drinks[0].strMeasure2}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient3
                ? props.drinks[0].strIngredient3 +
                  (props.drinks[0].strMeasure3 ? ": " + props.drinks[0].strMeasure3 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient4
                ? props.drinks[0].strIngredient4 +
                  (props.drinks[0].strMeasure4 ? ": " + props.drinks[0].strMeasure4 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient5
                ? props.drinks[0].strIngredient5 +
                  (props.drinks[0].strMeasure5 ? ": " + props.drinks[0].strMeasure5 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient6
                ? props.drinks[0].strIngredient6 +
                  (props.drinks[0].strMeasure6 ? ": " + props.drinks[0].strMeasure6 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient7
                ? props.drinks[0].strIngredient7 +
                  (props.drinks[0].strMeasure7 ? ": " + props.drinks[0].strMeasure7 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient8
                ? props.drinks[0].strIngredient8 +
                  (props.drinks[0].strMeasure8 ? ": " + props.drinks[0].strMeasure8 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient9
                ? props.drinks[0].strIngredient9 +
                  (props.drinks[0].strMeasure9 ? ": " + props.drinks[0].strMeasure9 : '')
                : ""}
            </Paragraph>
            <Paragraph>
              {props.drinks[0].strIngredient10
                ? props.drinks[0].strIngredient10 +
                  (props.drinks[0].strMeasure10 ? ": " + props.drinks[0].strMeasure10 : '')
                : ""}
            </Paragraph>
            <Spacer size={2} />
          </div>

          <div className="instructions">
            <HeadingTwo>Instructions</HeadingTwo>
            <Spacer size={1} />
            <Paragraph>{props.drinks[0].strInstructions}</Paragraph>
          </div>
        </div>
          {loggedIn ? <div onClick={clickOnHeartACB}>
          {activeFavorite ? (
            <FaHeart
              className="heart"
              style={{ color: "rgb(162, 123, 177)" }}
            />
          ) : (
            <FaRegHeart className="heart" />
          )}
        </div> : null}
      </div>
    </div>
  );
}
