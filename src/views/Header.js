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

export default function Header(props) {
  return (
    <div className="Header">
      <div>Logo</div>
      <div className="Options">
        <div>
          <BiSearch />
          <a className="link" herf="#">
            Link 1
          </a>
        </div>
        <div>
          <BiDrink />
          <a className="link" href="#">
            Link 1
          </a>
        </div>
        <div>
          <BiBook />
          <a className="link" href="#">
            Link 1
          </a>
        </div>
        <div>
          <BiHeart />
          <a className="link" href="#">
            Link 1
          </a>
        </div>
        <div>
          <BiShapePolygon />
          <a className="link" href="#">
            Link 1
          </a>
        </div>
      </div>
    </div>
  );
}
