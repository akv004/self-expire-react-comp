import React from "react";

export const useExpiration = expirationDate => {
  const [shouldRender, setShouldRender] = React.useState(true);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldRender(false);
    }, expirationDate - Date.now());

    return () => clearTimeout(timeoutId);
  }, [expirationDate]);
  return shouldRender;
};

export const useExpirationUI = (expirationDate, renderableThing) => {
  return useExpiration(expirationDate) ? renderableThing : null;
};

export const SelfDestruct = ({ expirationDate, children }) => {
  return useExpirationUI(expirationDate, children);
};
