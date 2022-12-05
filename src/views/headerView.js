//npm install react-icons --save
import { Link } from "react-router-dom";
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="Header">
      <img className="Img" alt="Logo" src="https://iili.io/HCkJS8G.png"></img>
        <div className="Options">
          <div> 
            <Link to="/">
              <BiHome />
              Home
            </Link>
          </div>
          <div>
            <Link to="/search">
              <BiSearch /> Advanced search
            </Link>
          </div>
          <div>
            <Link to="/randomize">
              <BiDrink /> Randomize
            </Link>
          </div>
          <div>
            <Link to="/favorites">
              <BiHeart /> Favourites
            </Link>
          </div>
        </div>
        <div className="btns">
          <SecondaryButton>Log in</SecondaryButton>
          <Spacer size={2} />
          <PrimaryButton>Sign up</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
