import {useContext} from 'react'
import FlashcardContext from '../context/flashcards'

const useFlashcardContext = () => {
  return useContext(FlashcardContext)
}

export default useFlashcardContext
