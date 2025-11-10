import React from "react"
import cx from "classnames"

const Button = (props) => {
  const { children, ...otherProps } = props

  const classes = cx(
    "mx-1 border-2 border-solid text-cyan-500 border-cyan-500 py-2 px-4 rounded-full hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out",
    otherProps.className,
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

export default Button
