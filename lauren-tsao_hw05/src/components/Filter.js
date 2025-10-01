import React from "react";
import { useState } from "react";
import cx from "classnames";

const Filter = (props) => {
  const { options, onChange } = props;
  const [isSelected, setIsSelected] = useState(null);

  const handleClick = (opt) => { 
    setIsSelected(opt.label);
    onChange(opt);
  };

  const renderedFilters = options.map((opt, index) => {
    const active = isSelected === opt.label;
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
