import { HeadingFour } from "./Headings";
import "./css/CategoryCard.css";
export function CategoryCard(props) {
  return (
    <div className="categoryContainer"
    style={{backgroundImage: `url(${props.img})`}}
    >

        <HeadingFour className='text'>{props.name}</HeadingFour>
    </div>
  );
}