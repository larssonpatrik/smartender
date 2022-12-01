//npm install react-icons --save
import {
  BiSearch,
  BiHeart,
  BiDrink,
  BiBook,
  BiShapePolygon,
} from "react-icons/bi";

import "../views/Header.css";
import "../components/css/Headings.css";
import Spacer from "../components/Spacer";

export default function Header(props) {
  return (
    <div className="Header">
      <div>Logga</div>
      <div className="Options">
        <div>
          <a className="link" href="#">
            <BiSearch />
            Link 1
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiDrink /> Link 1
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiBook /> Link 1
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiHeart /> Link 1
          </a>
        </div>
        <div>
          <a className="link" href="#">
            <BiShapePolygon /> Link 1
          </a>
        </div>
      </div>
    </div>
  );
}
