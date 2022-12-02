//npm install react-icons --save
import {
  BiSearch,
  BiHeart,
  BiDrink,
  BiBook,
  BiShapePolygon,
  BiQuestionMark,
  BiHome,
} from "react-icons/bi";

import "../views/Header.css";
import "../components/css/Headings.css";
import Spacer from "../components/Spacer";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

export default function Header(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>

    <div className="Header">
      <p style={{color:'whitesmoke'}}>Logga</p>
      <div className="Options">
        <div>
          <a className="link" href="#">
            <BiHome />
            Home
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiSearch /> Advanced search
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiDrink /> Randomize
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiHeart /> Favourites
          </a>
        </div>
      </div>
      <div className="btns">
          <SecondaryButton>Log in</SecondaryButton>
          <Spacer size={2}/>
          <PrimaryButton>Sign up</PrimaryButton>
        </div>
    </div>
    </div>
  );
}
