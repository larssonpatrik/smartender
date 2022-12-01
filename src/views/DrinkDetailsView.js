import React from 'react';
import "./drinkDetails.css";
import { HeadingOne, HeadingTwo } from '../components/Headings';
import { BodyOne } from '../components/TextBodies';
import Spacer from '../components/Spacer';

export default function DrinkDetailsView(props) {
    //callbacks for rendering each ingredient and its image etc
    function render_ingredientsCB(drink) {
      return (
          <div className='content'>
            <div className='drinkInfo'>
              <img src={drink.strDrinkThumb} alt="drink" height={500}/>
            </div>

            <div className='theRest'>
              <HeadingOne>{drink.strDrink}</HeadingOne>
              <Spacer size={3}/>

              <div className='ingredientInfo'>
                <HeadingTwo>Ingredients</HeadingTwo>
                <Spacer size={1}/>
                <BodyOne>{drink.strIngredient1}: {drink.strMeasure1}</BodyOne>
                <BodyOne>{drink.strIngredient2}: {drink.strMeasure2}</BodyOne>
                <BodyOne>{drink.strIngredient3}: {drink.strMeasure3}</BodyOne>
                <BodyOne>{drink.strIngredient4}: {drink.strMeasure4}</BodyOne>
                <BodyOne>{drink.strIngredient5 ? (drink.strIngredient5 + ': ' + drink.strMeasure5) : ''}</BodyOne>
                <BodyOne>{drink.strIngredient6 ? (drink.strIngredient6 + ': ' + drink.strMeasure6) : ''}</BodyOne>
                <BodyOne>{drink.strIngredient7 ? (drink.strIngredient7 + ': ' + drink.strMeasure7) : ''}</BodyOne>
                <BodyOne>{drink.strIngredient8 ? (drink.strIngredient8 + ': ' + drink.strMeasure8) : ''}</BodyOne>
                <BodyOne>{drink.strIngredient9 ? (drink.strIngredient9 + ': ' + drink.strMeasure9) : ''}</BodyOne>
                <BodyOne>{drink.strIngredient10 ? (drink.strIngredient10 + ': ' + drink.strMeasure10) : ''}</BodyOne>
                <Spacer size={2}/>
              </div>

              <div className='instructions'>
                <HeadingTwo>Instructions</HeadingTwo>
                <Spacer size={1}/>
                {drink.strInstructions}
              </div>
            </div>
          </div>
        );
    }

   

    return <div>{props.drinks.map(render_ingredientsCB)}</div>
  }
