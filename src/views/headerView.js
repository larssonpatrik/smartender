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
        <img
          className="Img"
          //Will fix this, image needs cropping
          src="https://scontent.fbma5-1.fna.fbcdn.net/v/t1.15752-9/317358773_815755949506469_4279423134182834123_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OEOYHcKN8R4AX9cyw3Z&_nc_ht=scontent.fbma5-1.fna&oh=03_AdSa2RBvBlgXbpO4mWlvbkxwcsjpTd2qvX-q4xSbKTK7Zw&oe=63B19F61"
        ></img>
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
