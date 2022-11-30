export default function resolvePromise(promise, promiseState, notify) {
  promiseState.promise = promise;
  promiseState.data = null;
  promiseState.error = null;

  if (notify) {
    notify();
  }

  function saveDataACB(result) {
    if (promiseState.promise === promise) {
      promiseState.data = result;
      if (notify) {
        notify();
      }
    }
  }

  function saveErrorACB(error) {
    if (promiseState.promise === promise) {
      promiseState.error = error;
      if (notify) {
        notify();
      }
    }
  }

  if (promiseState.promise !== null) {
    promise.then(saveDataACB).catch(saveErrorACB);
  }
}
