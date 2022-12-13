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
import { HeadingThree } from "../components/Headings";

export default function Header(props) {
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="Header">
        <Link to="/">
          <img className="Img" src="https://iili.io/HC6Ypqb.png" alt="logo" />
        </Link>
        <div className="Options">
          <div>
            <Link className="link" to="/">
              <BiHome />
              <Spacer size={0} />
              <HeadingThree>Home</HeadingThree>
            </Link>
          </div>
          <div>
            <Link className="link" to="/search">
              <BiSearch />
              <Spacer size={0} />
              <HeadingThree>Advanced search</HeadingThree>
            </Link>
          </div>
          <div>
            <Link className="link" to="/randomize">
              <BiDrink />
              <Spacer size={0} />
              <HeadingThree>Randomize</HeadingThree>
            </Link>
          </div>
          <div>
            <Link className="link" to="/favorites">
              <BiHeart />
              <Spacer size={0} />
              <HeadingThree>Favorites</HeadingThree>
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
