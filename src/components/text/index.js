import React from "react";

const Text = ({ value, color }) => {
  return <p style={{ color: color ? color : "black" }}>{value}</p>;
};

export default Text;
