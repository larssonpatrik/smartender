import { HeadingFour } from "../components/Headings";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";

export default function NotFoundPresenter(props) {
  return (
    <div>
      <HeadingFour style={{ textAlign: "center" }}>
        OH NO! Page not found
      </HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        Try redirecting by using the menu on top
      </METAText>
      <Spacer size={4} />
    </div>
  );
}
