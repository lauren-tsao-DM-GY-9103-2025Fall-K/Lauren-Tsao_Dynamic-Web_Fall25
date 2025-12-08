import React from "react";
import Button from "./sub-components/Button";
import { TOGGLE_COLOR, RESET_COLORS } from "../constants/actionTypes"; // prevent typos
import { RED, GREEN, BLUE, YELLOW, PURPLE } from "../constants/colorPalette";

// receives selectedColors , dispatch props from parent (FlashcardList.js)
const FlashcardFilter = ({ selectedColors, dispatch }) => {
  const colorNames = [RED, GREEN, BLUE, YELLOW, PURPLE];

  // when colorName is clicked
  // dispatch a TOGGLE_COLOR action to update selectedColors in the parent
  const handleColorClick = (colorName) => {
    dispatch({ type: TOGGLE_COLOR, color: colorName });
  };

  // for reset button onClick
  // dispatch a RESET_COLORS action to clear selectedColors in the parent
  const handleReset = () => {
    dispatch({ type: RESET_COLORS });
  };

  return (
    <div className="border-t border-x-2 border-b-2 w-full h-full border-black bg-white px-4">
      <h3 className="text-[28px] p-4 mb-2">Filter by Color</h3>

      <div className="flex flex-col gap-4 pl-4">
        {/* map colorNames into an array of colorName's containing colored divs + name input field*/}
        {colorNames.map((colorName) => (
          <div key={colorName} className="flex items-center gap-3">
            {/* toggling selected : unselected colors */}
            <div
              onClick={() => handleColorClick(colorName)}
              className={`w-9 h-9 cursor-pointer border rounded-full hover:scale-110 ${
                selectedColors.includes(colorName)
                  ? "outline-2 outline-offset-1 outline-double"
                  : "border-black border-1"
              }`}
              style={{ backgroundColor: colorName }}
            />

            {/* name input field*/}
            <input
              type="text"
              placeholder="Click to rename"
              className="border border-black px-2 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        ))}

        {/* reset button */}
        <Button
          secondary popUp
          className="w-2/3 h-14 mt-6 px-4 py-2"
          onClick={handleReset}
        >
          Clear selected colors
        </Button>
      </div>
    </div>
  );
};

export default FlashcardFilter;
