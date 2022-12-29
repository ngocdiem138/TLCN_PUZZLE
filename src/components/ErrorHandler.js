import * as React from "react";
const useErrorHandler = (initialState) => {
  const [error, setError] = React.useState(initialState);
  const showError = (errorMessage) => {
    setError(errorMessage);
    window.setTimeout(() => {
      setError(null);
    }, 10000);
  };
  return { error, showError };
};
export default useErrorHandler;
