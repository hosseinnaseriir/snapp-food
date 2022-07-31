import React from "react";
import PropTypes from "prop-types";

function Index({ children }) {
  return <div className="container">{children}</div>;
}

Index.propTypes = {
  children: PropTypes.any,
};

export default Index;
