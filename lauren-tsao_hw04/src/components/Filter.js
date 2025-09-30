import React from "react";
import { useState } from "react";
import cx from "classnames";

const Filter = (props) => {
  // properties of component --> like specific sockets that accept the plugs (data) from parent 
  const { options, onChange } = props;
  // isSelected = what is selected right now
  // setIsSelected = set a new selection
  // useState(null) = isSelected is null (nothing is selected) in the beginning
  const [isSelected, setIsSelected] = useState(null);

  const handleClick = (opt) => { // select an option on click (handleClick) whereby..
    setIsSelected(opt.label); // take the label property of the option (under OPTIONS in the FilterPage.js)..
    onChange(opt); //and inform the parent AKA FilterPage.js)
  };

  const renderedFilters = options.map((opt, index) => {
    const active = isSelected === opt.label; // active when selected option (isSelected) is strictly equal to label of option
    return (
      <button
        key={index}
        className={cx(
          "rounded-full m-3 main-font",
          active
            ? "bg-black border-black text-white px-4 py-2 border mr-2 cursor-pointer"
            : "bg-white border-black text-black px-4 py-2 border mr-2 cursor-pointer"
        )}
        onClick={() => handleClick(opt)}
      >
        {opt.label}
      </button>
    );
  });

  return <div className="flex">{renderedFilters}</div>;
};

export default Filter;
