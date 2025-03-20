import React from "react";

const Button = ({ label, isValid }) => {
  return (
    <div className="form-group">
      <button disabled={!isValid}>{label}</button>
    </div>
  );
};

export default Button;
