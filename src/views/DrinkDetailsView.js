import React from "react";
import "./drinkDetails.css";
import { HeadingOne, HeadingTwo } from "../components/Headings";
import { Paragraph } from "../components/TextBodies";
import Spacer from "../components/Spacer";
import CategoryCard from "../components/CategoryCard";

export default function DrinkDetailsView(props) {
  //callbacks for rendering each ingredient and its image etc
  function render_ingredientsCB(drink) {
    return (
        <div className="detailsContainer">
          <img
            className="drinkImg"
            src={drink.strDrinkThumb}
            alt="drink"
            height={500}
          />

          <div className="content">
            <HeadingOne>{drink.strDrink}</HeadingOne>
            <Spacer size={3} />

            <div className="ingredientInfo"> {/*Kolla om det finns unit också, annars står det null vilket är fult*/}
              <HeadingTwo>Ingredients</HeadingTwo>
              <Spacer size={1} />
              <Paragraph>
                {drink.strIngredient1}: {drink.strMeasure1}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient2}: {drink.strMeasure2}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient3}: {drink.strMeasure3}
              </Paragraph>
              <Paragraph>
              {drink.strIngredient4
                  ? drink.strIngredient4 + ": " + drink.strMeasure4
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient5
                  ? drink.strIngredient5 + ": " + drink.strMeasure5
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient6
                  ? drink.strIngredient6 + ": " + drink.strMeasure6
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient7
                  ? drink.strIngredient7 + ": " + drink.strMeasure7
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient8
                  ? drink.strIngredient8 + ": " + drink.strMeasure8
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient9
                  ? drink.strIngredient9 + ": " + drink.strMeasure9
                  : ""}
              </Paragraph>
              <Paragraph>
                {drink.strIngredient10
                  ? drink.strIngredient10 + ": " + drink.strMeasure10
                  : ""}
              </Paragraph>
              <Spacer size={2} />
            </div>

            <div className="instructions">
              <HeadingTwo>Instructions</HeadingTwo>
              <Spacer size={1} />
              <Paragraph>{drink.strInstructions}</Paragraph>
            </div>
          </div>
        </div>
    );
  }

  return <div>{props.drinks.map(render_ingredientsCB)}</div>;
}
