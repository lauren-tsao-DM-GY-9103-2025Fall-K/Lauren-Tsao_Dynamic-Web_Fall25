import React from "react";
import cx from "classnames";

const Button = (props) => {
  const { children, primary, secondary, ...otherProps } = props;

  const classes = cx(
    "flex items-center px-8 py-3 mx-1 my-1 border transition-colors duration-400",
    otherProps.className,
    {
      "bg-white border-white text-black hover:bg-black hover:text-white":
        primary,
      "bg-back border-white text-white hover:bg-white hover:text-black":
        secondary,
    }
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

export default Button;
