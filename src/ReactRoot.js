import React from "react";
import App from "./App"
import promiseNoData from "./promiseNoData"
import resolvePromise from "./resolvePromise"
import {firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from "./firebaseModel"

export default function ReactRoot() {

  /*
    if (!promiseState.promise) {
      resolvePromise(firebaseModelPromise(), promiseState, notifyACB);
    }
    if (promiseState.promise) {
       if (updateFirebaseFromModel(promiseState.data))
        {updateModelFromFirebase(promiseState.data)}
    }
  */

    
    return <App model={[]}  ></App>
  }