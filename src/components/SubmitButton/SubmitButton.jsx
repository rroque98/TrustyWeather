import React from "react";

const SubmitButton = ({ value, handleClick }) => (
  <div>
    <input type="submit" value={value} onClick={handleClick} />
  </div>
);

export default SubmitButton;
