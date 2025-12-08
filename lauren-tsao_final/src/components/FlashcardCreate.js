import { useState } from "react";
import useFlashcardContext from "../hooks/use-flashcard-context";
import Button from "./sub-components/Button";
import QALabelInput from "./sub-components/QAlabelInput";
import { RED, GREEN, BLUE, YELLOW, PURPLE } from "../constants/colorPalette";

const FlashcardCreate = () => {
  const { createFlashcard } = useFlashcardContext();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [color, setColor] = useState("");

  const colorNames = [RED, GREEN, BLUE, YELLOW, PURPLE];

  // event = the browser's event object
  // event.target = the element that triggered the event (in this case the <input> element)
  // event.target.value = the text currently inside the input element
  const handleQuestionChange = (event) => setQuestion(event.target.value);
  const handleAnswerChange = (event) => setAnswer(event.target.value);
  const handleColorChange = (selectedColor) => setColor(selectedColor);

  const handleSubmit = (event) => {
    event.preventDefault();
    createFlashcard(question, answer, color);
    setQuestion("");
    setAnswer("");
    setColor("");
  };

  return (
    <div className="w-screen h-1/6 flex justify-around fixed bg-white border-t-2 border-b border-black items-center">
      <h1>Make a Flashcard!</h1>
      <form onSubmit={handleSubmit} className="flex gap-10 items-center">
        {/* input question */}
        <QALabelInput
          label="Question:"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type question here"
        />

        {/* input answer */}
        <QALabelInput
          label="Answer:"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Type answer here"
        />

        {/* input color */}
        <div className="flex flex-col w-40">
          <label className="text-[20px] mb-4">Color:</label>
          <div className="flex gap-2 mb-6">
            {colorNames.map((colorName) => (
              <div
                key={colorName}
                onClick={() => handleColorChange(colorName)}
                className={`w-6 h-6 rounded-full cursor-pointer border hover:scale-110 ${
                  colorName === color
                    ? "outline-2 outline-offset-1 outline-double"
                    : "border-black border-1"
                }`}
                style={{ backgroundColor: colorName }}
              />
            ))}
          </div>
        </div>

        <Button type="submit" primary popUp className="w-42 h-16 px-4 py-2">
          Create Flashcard
        </Button>
      </form>
    </div>
  );
};

export default FlashcardCreate;
