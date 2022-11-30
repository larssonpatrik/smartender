export default function resolvePromise(promise, promiseState) {
  promiseState.promise = promise;
  promiseState.data = null;
  promiseState.error = null;

  function saveDataACB(result) {
    if (promiseState.promise === promise) {
      promiseState.data = result;
    }
  }

  function saveErrorACB(error) {
    if (promiseState.promise === promise) {
      promiseState.error = error;
    }
  }

  if (promiseState.promise !== null) {
    promise.then(saveDataACB).catch(saveErrorACB);
  }
}
