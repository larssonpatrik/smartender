export default function promiseNoData(promiseState) {
  if (promiseState) {
    if (promiseState.promise) {
      if (promiseState.data) {
        return false;
      } else if (promiseState.error) {
        return <div>{promiseState.error.toString()}</div>;
      } else {
        return (
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        );
      }
    } else if (!promiseState.promise) {
      return <div>no data</div>;
    }
  } else {
    return <div>no data</div>;
  }
}
