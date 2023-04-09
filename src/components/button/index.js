import React from "react";

const Button = ({enable}) => {
  return (
    <>
      <button id="button" disabled={!enable}>
        Submit
      </button>
    </>
  );
};

export default Button;
