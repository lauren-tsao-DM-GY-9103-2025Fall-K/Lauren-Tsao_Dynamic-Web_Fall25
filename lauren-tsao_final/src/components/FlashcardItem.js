import { useState } from "react";
import useFlashcardContext from "../hooks/use-flashcard-context";
import FlashcardEdit from "./FlashcardEdit";
import Button from "./sub-components/Button";

// DND-KIT: IMPORTS
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const FlashcardItem = ({ flashcard }) => {
  const { deleteFlashcardById, editFlashcardById } = useFlashcardContext();
  const [showEdit, setShowEdit] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleDelete = () => deleteFlashcardById(flashcard.id);
  const handleEdit = () => setShowEdit(!showEdit);
  const handleSubmit = (id, newQuestion, newAnswer, newColor) => {
    editFlashcardById(id, newQuestion, newAnswer, newColor);
    setShowEdit(false);
  };
  const toggleAnswer = () => setShowAnswer(!showAnswer);

  // DND-KIT: MAKING THIS FLASHCARD SORTABLE
  // tutorial timestamp: https://youtu.be/dL5SOdgMbRY?si=VNjCIMz3aqnt42RX&t=497
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // detect if this item is being dragged
  } = useSortable({ id: flashcard.id }); // pass in id of flashcard

  // DND-KIT: STYLING
  // tutorial timestamp: https://youtu.be/dL5SOdgMbRY?si=4Pah_VDiueU-s_aA&t=532
  const style = {
    // (from dnd-kit)
    transform: CSS.Transform.toString(transform),
    transition,
    // normal CSS properties
    zIndex: isDragging ? 1 : 0, // make dragged card appear above others
    position: "relative", // required for z-index to work^
    boxShadow: isDragging ? "4px 4px 0px rgba(0,0,0,0.8)" : "none",
    cursor: isDragging ? "grabbing" : "grab", // cursor appearance change
  };

  const content = showEdit ? (
    // pass flashcard , onSubmit props to FlashcardEdit.js
    <FlashcardEdit flashcard={flashcard} onSubmit={handleSubmit} />
  ) : (
    <div
      className="flex justify-between border border-black bg-white w-full"
      ref={setNodeRef} // (from dnd-kit) setNoderef attaches a reference to this flashcard for dnd-kit to keep track of
      style={style}
      {...attributes}
    >
      {/* DND-KIT: SPECIFY DRAGGABLE AREA */}
      <div {...listeners} className="flex items-center gap-2 flex-1">
        {/* flashcard color box */}
        <div
          className="w-14 border-r-2 border-black h-full"
          style={{ backgroundColor: flashcard.color }}
        ></div>

        {/* main show question / answer area */}
        <div className="p-4">
          {showAnswer ? flashcard.answer : flashcard.question}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mr-2">
        <Button toDelete onClick={handleDelete} className="w-24 px-2 py-1">
          Delete
        </Button>
        <Button toEdit onClick={handleEdit} className="w-20 px-2 py-1">
          Edit
        </Button>
        <Button
          secondary
          onClick={toggleAnswer}
          className="w-40 px-2 py-1 border-none"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </div>
    </div>
  );

  return content;
};

export default FlashcardItem;
