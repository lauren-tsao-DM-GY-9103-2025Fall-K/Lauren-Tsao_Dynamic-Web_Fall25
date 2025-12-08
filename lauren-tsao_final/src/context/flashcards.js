import {createContext, useState, useCallback} from 'react'
import axios from 'axios'

const FlashcardContext = createContext()

const Provider = ({children}) => {
  const [flashcards, setFlashcards] = useState([])

  const fetchFlashcards = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/flashcards')
    setFlashcards(response.data)
  }, [])

  const createFlashcard = async (question, answer, color) => {
    const response = await axios.post('http://localhost:3001/flashcards', {
      question,
      answer,
      color,
    })

    const updatedFlashcards = [...flashcards, response.data]
    setFlashcards(updatedFlashcards)
  }

  const deleteFlashcardById = async (id) => {
    await axios.delete(`http://localhost:3001/flashcards/${id}`)
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id)
    setFlashcards(updatedFlashcards)
  }

  const editFlashcardById = async (id, newQuestion, newAnswer, newColor) => {
    const response = await axios.put(`http://localhost:3001/flashcards/${id}`, {
      question: newQuestion,
      answer: newAnswer,
      color: newColor,
    })
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === id) {
        return {
          ...flashcard,
          ...response.data,
        }
      }
      return flashcard
    })

    setFlashcards(updatedFlashcards)
  }

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        fetchFlashcards,
        createFlashcard,
        deleteFlashcardById,
        editFlashcardById,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  )
}

export { Provider }
export default FlashcardContext
