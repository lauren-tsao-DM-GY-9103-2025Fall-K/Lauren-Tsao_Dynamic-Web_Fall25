# DM-GY 9103: Dynamic Web - Mid-term Project

## Brief

The final project for the Fall 2025 Semester displaying an understanding of the following topics:

- Context
- JSON Server
- Redux

The project can be done through 2 options, as follows. 

### Option A

Re-skin the in-class To-do List App into something more specific. It must include the following:

- Styling
- Adding more input fields to make the usage of the app more specific

For example: Turning the generic To-do list into an exercise tracker. Maybe some color coding can be added, or a way to filter or search existing todos.

### Option B

Build a new tool, game, or site that utilizes at least 2 topics from the second half of the semester. This option is more open, but working knowledge of Context, JSON Server, and/or Redux must be demonstrated.

## Concept

I am inspired by my own experience in learning Japanese, in which I haven't found a Flashcard Maker that met my needs. They were either overwhelming, or already had pre-loaded flashcards that I did not need.

The timing could not have been any more perfect. The topics I learned this semester provided the building blocks that would help me in developing my own Flashcard Maker website. It was also a great opportunity to re-skin up the in-class to-do list, hence I decided to pick Option A.

## Visual References

I wanted something clean, but also have a dash of fun added to it. So I started gathering visual references on how I can achieve this aesthetic and created a Pinterest board which can be viewed [here](https://www.pinterest.com/enweitsao/dynamic-web-final-project/).

## Milestone 1: Project Proposal Presentation Deck

After I settled on an aesthetic, it was time to plan out how the website would be developed. This is presented on Week 12 of the semester in the form of a Project Proposal slide deck containing the following:

- concept | theme of the site
- concepts | skills covered in class that I will use to build your site
- concepts | skills I would need to still learn to complete the project

The link to the presentation deck of this project can be viewed [here](https://www.figma.com/deck/Mr4uI3o7xzpEcyItk6eHW0/Lauren-Tsao---Dynamic-Web-Final-Project-Proposal?node-id=1-42&viewport=-103%2C-69%2C0.5&t=PDYac9OxdF7P0eZ4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1).

## Milestone #2 - Setting up JSON Server & Context

### JSON Server

After getting the green light to proceed developing the app, I began implementing the keys in the db.json file.

```
"flashcards": [
    {
      "question": "to buy (formal)",
      "answer": "かいます / 買います",
      "color": "#FFE100",
      "id": 1
    },
]
```

After that, I proceeded to set up the [api.http](link)

### Context

Applying what I have learned from WK10-V3 in-class code, I made a [flashcard.js](link) file and added the properties: question, answer and color.

```
const createFlashcard = async (question, answer, color) => {
    const response = await axios.post('http://localhost:3001/flashcards', {
      question,
      answer,
      color,
    })}

    ...

    const editFlashcardById = async (id, newQuestion, newAnswer, newColor) => {
    const response = await axios.put(`http://localhost:3001/flashcards/${id}`, {
      question: newQuestion,
      answer: newAnswer,
      color: newColor,
    })}
```
Once this is done, I fashioned this context into a hook to use throughout my entire project.

```
import {useContext} from 'react'
import FlashcardContext from '../context/flashcards'

const useFlashcardContext = () => {
  return useContext(FlashcardContext)
}

export default useFlashcardContext
```

## Milestone #3 - Building the Components in React

Now that the server is up and running and context is ready to go, its time to start building the components!

### The 'FlashcardCreate.js' component

This component's purpose is to create a flashcard. This is made possible through its main function, FlashcardCreate, which contains the following key points.

```
  const { createFlashcard } = useFlashcardContext();
```
The above is the function from flashcards.js to create a flashcard. Followed by the question, answer, color state variables, and their 'set' functions to enable themselves to update.
```  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [color, setColor] = useState("");
```
I also added an array of colors to use for the flashcard color assigning.

To do this, I created another file called colorPalette.js containing variables assigned to the hex codes of the respective colors for easy reference.

So from this:
```
  const colorNames = ["#FD2E2E", "#04B376", "#0EACF0", "#FFE100", "#BB00D8"];
```

Became this:
```
const colorNames = [RED, GREEN, BLUE, YELLOW, PURPLE];
```

I then added handlers to handle the updating of the state variables.  

```  
  const handleQuestionChange = (event) => setQuestion(event.target.value);
  const handleAnswerChange = (event) => setAnswer(event.target.value);
  const handleColorChange = (selectedColor) => setColor(selectedColor);
```
Finally, the handleSubmit function reads all state variables and passes them to the createFlashcard function to create the new flashcard, resetting all the fields upon submission. Phew!
```
  const handleSubmit = (event) => {
    event.preventDefault();
    createFlashcard(question, answer, color);
    setQuestion("");
    setAnswer("");
    setColor("");
  }
```


### The 'FlashcardEdit.js' component

I needed a way to edit an existing flashcard. This component does exactly that. It follows pretty much the same logic as FlashcardCreate.js, the only key difference is that it is receiving two props from a parent (spoiler: its FlashcardItem.js) containing the current state variable values.

```
  const FlashcardEdit = ({ flashcard, onSubmit }) => {
  const [question, setQuestion] = useState(flashcard.question);
  const [answer, setAnswer] = useState(flashcard.answer);
  const [color, setColor] = useState(flashcard.color);

  ...

  }
```
It was also at this point I started making sub-components, which is Button and QAlabelInput (i.e Question and Answer input fields), because I found myself repeating too much when I was hardcoding these out.


### The 'FlashcardItem.js' component

This is the flashcard itself! It is also the parent of FlashcardEdit to enable itself to be editable. Again, it has about the same logic as the previous 2 components, albeit more interactive, in which it can delete, edit and hide/show answers.

```
const FlashcardItem = ({ flashcard }) => {
  const { deleteFlashcardById, editFlashcardById } = useFlashcardContext()
  const [showEdit, setShowEdit] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleDelete = () => {
    deleteFlashcardById(flashcard.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newQuestion, newAnswer, newColor) => {
    editFlashcardById(id, newQuestion, newAnswer, newColor)
    setShowEdit(!showEdit)
  }

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  ...

}
```
To toggle between displaying the edit options, I used a ternary operator.

```
const content = showEdit ? (
    <FlashcardEdit flashcard={flashcard} onSubmit={handleSubmit} />
  ) : (
    <div>
      <div
        className="w-14 border-r-2 border-black h-full"
        style={{ backgroundColor: flashcard.color }}</div>
      <div> className="p-4">{showAnswer ? flashcard.answer : flashcard.question}</div>
    </div>
  )
  ```


### The 'FlashcardFilter.js' & 'FlashcardList.js' component
These two components work together to make the filter logic happen. FlashcardList.js holds all the flashcard items, and FlashcardList is like the controller that communicated the colors toggled to FlashcardList to make the filtering happen.

#### FlashcardFilter.js
1. To allow easy replacing of the colors, I made a separate file called colorPalette.js and assigned the hex codes of the colors to variables. (e.g RED = "#FD2E2E"). I then imported these variables into the FlashcardFilter.

2. I then set up the dispatching of the actions (located in the parent (FlashcardFilter.js))

```
// section 1
const FlashcardFilter = ({ selectedColors, dispatch }) => {
  const colorNames = [RED, GREEN, BLUE, YELLOW, PURPLE];

// section 2
  const handleColorClick = (colorName) => {
    dispatch({ type: TOGGLE_COLOR, color: colorName });
  };

  const handleReset = () => {
    dispatch({ type: RESET_COLORS });
  };

  ...
}
```
#### FlashcardList.js
1. Actions are set up within a reducer (colorReducer) to receive the dispatch notice from FlashcardFilter.js.Similar to the colorPalette setup, I also assigned action names to variables in a separate file (actionTypes.js) to prevent typos. (e.g TOGGLE_COLOR = "toggle_color")

2. When colors are selected, apply useReducer to activate the reducer.

```
// section 1
const colorReducer = (state, action) => {
  switch (action.type) {
    
    case 'TOGGLE_COLOR':
      return state.includes(action.color)
        ? state.filter(c => c !== action.color) 
        : [...state, action.color]            
    
    case 'RESET':
      return [] // clear all selected colors
      
    default:
      return state
  }
}

// section 2
 const [selectedColors, dispatch] = useReducer(colorReducer, [])

```

## Implemented Dragging and Dropping using Dnd Kit
Now that the filtering is done, I wanted to add drag and drop capabilities to the flashcards to enable manual arranging. It also adds an extra layer of interactivity! I started looking into to a bunch of drag and drop libraries, starting with this [article](https://puckeditor.com/blog/top-5-drag-and-drop-libraries-for-react). I was also recommended [react-DnD](https://react-dnd.github.io/react-dnd/about) by professor Adee. After some experimentation, I decided to go with the up and coming [dnd kit](https://docs.dndkit.com/) I found [this step-by-step tutorial](https://www.youtube.com/watch?v=dL5SOdgMbRY) especially useful in teaching me how to implement it into my project.

In order to get the dragging and dropping to work, I needed to modify two components: The FlashcardItem.js and the FlashcardList.js.

### The Sortable Preset
This allows the targeted interface to be sortable (i.e use this preset to tell dnd-kit which elements are draggable) Full documentation of the preset [here](https://docs.dndkit.com/presets/sortable).

#### In 'FlashcardItem.js'
First, I imported useSortable hook from the Sortable preset.

```
import { useSortable } from "@dnd-kit/sortable";
```

Second, I need to apply the useSortable hook to each flashcard to make it sortable. It will return some properties (attributes, listeners etc.). What each property does can be found [here](https://docs.dndkit.com/presets/sortable/usesortable#properties).

```
const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: flashcard.id });
```
Third, I would need to attach a reference (setNodeRef) to each flashcard for dnd-kit to keep track of. I also created another dedicated div to specify the draggable area.

```
<div ref={setNodeRef} {...attributes}>
<div {...listeners}>

...

</div>
```

#### In 'FlashcardList.js'
The useSortable hook from the FlashcardItem.js will only work if it is the child of a Sortable Context provider. So naturally, this provider should be imported the FlashcardList,js.

First, aside from importing SortableContext, I also need 'verticalListSortingStrategy' since my list is vertical (more info on strategies [here](https://docs.dndkit.com/presets/sortable/sortable-context#strategy)) and a utility function that updates an array based on the original and new positions, called 'arrayMove'.

```
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
```
I also need to import the DndContext tag, super important for anything involving dragging and dropping. Lastly, I need to import a collision detector algorithm, so I chose closestCorners (more on collision detection algorithms [here](https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms))

```
import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";
```

Second, I need to set up a local state (useState) to define flashcards to be dragged. I also added a useEffect to update the local state to reflect any changes done to the flashcards (i.e created/edited/deleted)

```
const [flashcardOrder, setFlashcardOrder] = useState([]);

useEffect(() => {
    setFlashcardOrder(flashcards);
  }, [flashcards]);
```

Third, it's time to set up the event of dragging and dropping.

```
const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    const originalPos = flashcardOrder.findIndex((f) => f.id === active.id);
    const newPos = flashcardOrder.findIndex((f) => f.id === over.id);

    setFlashcardOrder(arrayMove(flashcardOrder, originalPos, newPos));
  };
  ```

- 'active' is the element currently being dragged
- 'over' is the element which will be replaced once the active element is let go

If the id of the active and over element is the same (i.e being let go in the same position), exit the function (return).

If it is not the same, get the original and new position and update it using dnd-kit's arrayMove utility function.

Finally, these sortable flashcards would be rendered within the SortableContext provider.

```
<div>
  <DndContext
    collisionDetection={closestCorners}
    onDragEnd={handleDragEnd}
  >
    <SortableContext
      items={filteredFlashcards}
      strategy={verticalListSortingStrategy}
    >
      {filteredFlashcards.length > 0 ? (
        filteredFlashcards.map((flashcard) => (
          <FlashcardItem key={flashcard.id} flashcard={flashcard} />
        ))
      ) : (
        <p>
          No flashcards match the selected color(s) .｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.
        </p>
      )}
    </SortableContext>
  </DndContext>
</div>
```

## Next Steps

ANIMATION

## Presentation Deck

The link to the presentation deck of this project can be viewed [here](https://www.figma.com/deck/mooccAG3GjqGNF3sMIpquX/Lauren-Tsao---Dynamic-Web-Final-Project-Presentation?node-id=1-42&viewport=-125%2C-86%2C0.67&t=JgM6d6CSunKxqPwJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)
