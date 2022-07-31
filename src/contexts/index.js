import React, { useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

const contexts = createContext({
  loading: false,
  setLoading: () => {},
});

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <contexts.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
