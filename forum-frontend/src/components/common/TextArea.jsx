import React from "react";

const TextArea = ({ name, label, placeholder, register, errors }) => {
  return (
    <div className="form-group">
      <textarea placeholder={placeholder} {...register(name)}></textarea>
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default TextArea;
