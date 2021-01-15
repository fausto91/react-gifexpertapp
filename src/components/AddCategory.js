import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // console.log('Sumit hecho');
      setcategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
