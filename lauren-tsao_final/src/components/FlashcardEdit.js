import { useState } from "react";
import Button from "./sub-components/Button";
import QALabelInput from "./sub-components/QAlabelInput";
import { RED, GREEN, BLUE, YELLOW, PURPLE } from "../constants/colorPalette";

// receives flashcard , onSubmit props from parent (FlashcardItem.js)
const FlashcardEdit = ({ flashcard, onSubmit }) => {
  const [question, setQuestion] = useState(flashcard.question);
  const [answer, setAnswer] = useState(flashcard.answer);
  const [color, setColor] = useState(flashcard.color);

  const colorNames = [RED, GREEN, BLUE, YELLOW, PURPLE];

  const handleQuestionChange = (event) => setQuestion(event.target.value);
  const handleAnswerChange = (event) => setAnswer(event.target.value);
  const handleColorChange = (selectedColor) => setColor(selectedColor);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(flashcard.id, question, answer, color);
  };

  return (
    <div className="border-b-2 border-black flex pt-4 px-2 justify-evenly bg-gray-200">
      <h1 className="p-4">Edit Flashcard</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-rows-2 grid-flow-col gap-x-10"
      >
        {/* edit question */}
        <QALabelInput
          label="Question:"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type new question here"
        />

        {/* edit color */}
        <div className="flex flex-col w-80">
          <label className="text-[20px] mb-2">Update Color:</label>
          <div className="flex gap-2">
            {colorNames.map((colorName) => (
              <div
                key={colorName}
                onClick={() => handleColorChange(colorName)}
                className={`w-6 h-6 cursor-pointer border rounded-full hover:scale-110 ${
                  colorName === color
                    ? "outline-2 outline-offset-1 outline-double"
                    : "border-black border-1"
                }`}
                style={{ backgroundColor: colorName }}
              />
            ))}
          </div>
        </div>

        {/* edit answer */}
        <QALabelInput
          label="Answer:"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Type new answer here"
        />

        <Button type="submit" primary popUp className="justify-self-end w-1/2 h-2/3 mt-2 px-4 py-2">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default FlashcardEdit;
