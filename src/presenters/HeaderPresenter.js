import { getAuth } from "firebase/auth";
import HeaderSignInView from "../views/HeaderSignInView";
import HeaderSignedInView from "../views/HeaderSignedInView";

export default function HeaderPresenter(props) {
  const user = getAuth().currentUser;
  console.log(user);

  if (user) {
    return (
      <div>
        <HeaderSignedInView />
      </div>
    );
  } else {
    return (
      <div>
        <HeaderSignInView />
      </div>
    );
  }
}
