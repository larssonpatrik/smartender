import { getAuth } from "firebase/auth";
import HeaderView from "../views/HeaderView";
import React, { useState, useEffect } from "react";

export default function HeaderPresenter(props) {
  const [user, setUser] = useState(null);

  function signOutACB() {
    const auth = getAuth();
    auth.signOut();
  }

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

  return (
    <div>
      <HeaderView signOutFunc={signOutACB} userState={user} />
    </div>
  );
}
