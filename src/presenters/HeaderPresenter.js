import { getAuth } from "firebase/auth";
import HeaderSignInView from "../views/HeaderSignInView";
import HeaderSignedInView from "../views/HeaderSignedInView";
import React, { useState, useEffect } from "react";
export default function HeaderPresenter(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
