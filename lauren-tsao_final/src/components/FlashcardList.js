import { useReducer, useEffect, useState } from "react";
import useFlashcardContext from "../hooks/use-flashcard-context";
import FlashcardItem from "./FlashcardItem";
import FlashcardFilter from "./FlashcardFilter";

// prevent typos (constants for reducer actions)
import { TOGGLE_COLOR, RESET_COLORS } from "../constants/actionTypes";

// DND-KIT: IMPORTS
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { DndContext, closestCorners } from "@dnd-kit/core";

// reducer to manage selected colors
// TOGGLE_COLOR ref: https://stackoverflow.com/questions/72193084/how-to-toggle-an-array-item-in-react-state
// explanation: https://wweb.dev/blog/how-to-toggle-an-array-item-in-react-state
const colorReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_COLOR:
      return state.includes(action.color)
        ? state.filter((c) => c !== action.color) // remove color
        : [...state, action.color]; // add color
    case RESET_COLORS:
      return [];
    default:
      return state;
  }
};

const FlashcardList = () => {
  // get flashcards from the context
  const { flashcards } = useFlashcardContext();

  // DND-KIT: SET UP STATE
  // add local state to track the current order of flashcards for drag-and-drop
  // tutorial timestamp: https://youtu.be/dL5SOdgMbRY?si=1-NnOTjALqt91GTd&t=169
  const [flashcardOrder, setFlashcardOrder] = useState([]);

  // update local state to match context's order whenever flashcards within context change (i.e created/edited/deleted)
  useEffect(() => {
    setFlashcardOrder(flashcards);
  }, [flashcards]);

  // track currently selected color/s
  const [selectedColors, dispatch] = useReducer(colorReducer, []);
  // --> const [currentStateValue, dispatchFunction] = useReducer(reducerFunction, initialState)
  // 'dispatch' 'action' to the reducer to update selectedColors array
  // e.g if user picks RED --> 'dispatch({type: TOGGLE_COLOR, color: RED})' from FlashcardFilter.js

  // filter flashcards based on selected color/s
  const filteredFlashcards =
    selectedColors.length > 0
      ? flashcardOrder.filter((f) => selectedColors.includes(f.color)) // filter flashcardOrder to include only flashcards (f) whose color is in selectedColors
      : flashcardOrder;

  // DND-KIT: SET UP EVENT FOR UPDATING OF POSITIONS
  // tutorial timestamp: https://youtu.be/dL5SOdgMbRY?si=CSQuJGJDituxuThO&t=614
  // (from dnd-kit) handleDragEnd updates flashcard order after a drag
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    const originalPos = flashcardOrder.findIndex((f) => f.id === active.id); // gets the position of the flashcard before it was dragged
    const newPos = flashcardOrder.findIndex((f) => f.id === over.id); // gets the new position of the flashcard after the array is updated

    // (from dnd-kit) arrayMove --> updates the array based on original and new position
    setFlashcardOrder(arrayMove(flashcardOrder, originalPos, newPos));
  };

  return (
    <div className="w-full h-full flex relative">
      {/* filter section */}
      <div className="w-1/4 h-5/6 right-0 fixed z-40">
        {/* pass selectedColors , dispatch props to FlashcardFilter.js */}
        <FlashcardFilter selectedColors={selectedColors} dispatch={dispatch} />
      </div>

      {/* list section */}
      <div className="w-3/4 z-0">
        {/* (from dnd-kit) DndContext = wraps all draggable items
            collisionDetection = determines how items detect overlap
            onDragEnd = callback when a drag completes*/}
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {/* (from dnd-kit) SortableContext = defines the sortable area
                  items = array of items that can be sorted (ids)
                  strategy = layout (verticalListSortingStrategy is vertical layout)*/}
          <SortableContext
            items={filteredFlashcards}
            strategy={verticalListSortingStrategy}
          >
            {filteredFlashcards.length > 0 ? (
              filteredFlashcards.map((flashcard) => (
                <FlashcardItem key={flashcard.id} flashcard={flashcard} />
              ))
            ) : (
              <p className="py-60 pl-20 h-full bg-white">
                No flashcards match the selected color(s) .｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.
              </p>
            )}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default FlashcardList;
