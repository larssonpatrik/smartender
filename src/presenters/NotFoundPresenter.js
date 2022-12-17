import { HeadingFour } from "../components/Headings";
import Spacer from "../components/Spacer";
import { METAText } from "../components/TextBodies";

export default function NotFoundPresenter() {
  return (
    <div>
      <Spacer size={4} />
      <HeadingFour style={{ textAlign: "center" }}>
        OH NO! No Results!
      </HeadingFour>
      <Spacer size={0} />
      <METAText style={{ textAlign: "center" }}>
        You're supposed to search for a drink!
      </METAText>
      <Spacer size={6} />
      <Spacer size={6} />
      <Spacer size={6} />
      <Spacer size={6} />
      <Spacer size={4} />
    </div>
  );
}
