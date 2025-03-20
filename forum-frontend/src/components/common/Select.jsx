import React from "react";

const Select = ({ name, label, register, errors, options }) => {
  return (
    <div className="grid gap-4">
      <label className="text-grey text-lg">Tags</label>
      <select
        {...register(name)}
        className="bg-primary text-grey p-2 rounded-lg "
      >
        <option value=""></option>
        {options.map((option) => (
          <option value={option.tag} key={option.tag}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
