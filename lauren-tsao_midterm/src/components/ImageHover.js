import { useState } from "react";

const ImageHover = ({
  className = "w-60 z-5",
  defaultSrc,
  hoverSrc,
  alt,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      className={className}
      src={isHovered ? hoverSrc : defaultSrc}
      alt={alt}
      onMouseEnter={(e) => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
    />
  );
};

export default ImageHover;
