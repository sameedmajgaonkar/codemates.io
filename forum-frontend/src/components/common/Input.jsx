import React from "react";

const Input = ({
  name,
  type = "text",
  label,
  icon,
  register,
  errors,
  accept,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        accept={accept}
        className="form-control"
        placeholder={name}
        {...register(name)}
      />

      <label htmlFor="">{label}</label>
      <i>{icon}</i>
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default Input;
