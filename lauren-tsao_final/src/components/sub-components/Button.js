import React from "react";
import cx from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  toEdit,
  toDelete,
  popUp,
  ...otherProps
}) => {
  const classes = cx(
    "border-black hover:text-white transition",
    otherProps.className,
    {
      "border-2 bg-black text-white hover:bg-blue-600": primary,
      "border-2 bg-white text-black hover:bg-blue-600": secondary,
      "border-r-2 bg-white text-black hover:bg-green-600": toEdit,
      "border-x-2 bg-white text-black hover:bg-red-600": toDelete,

      // pop up on hover
      "hover:border-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:-translate-x-0 active:-translate-y-0 active:shadow-none": popUp,
    }
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

export default Button;
