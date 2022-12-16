import React from "react";

import SignInPresenter from "./presenters/SignInPresenter.js";
import SignupPresenter from "./presenters/SignupPresenter.js";

function App(props) {
  return (
    <>
      <SignupPresenter />
      <SignInPresenter />
    </>
  );
}

export default App;
