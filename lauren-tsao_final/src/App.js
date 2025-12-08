import { useEffect, useContext } from 'react'
import FlashcardContext from './context/flashcards'
import FlashcardCreate from './components/FlashcardCreate'
import FlashcardList from './components/FlashcardList'

function App() {
  const { fetchFlashcards } = useContext(FlashcardContext)

  useEffect(() => {
    fetchFlashcards()
  }, [fetchFlashcards])

  return (
    <div className="w-screen h-screen">
      <div className="h-1/6 border-y-2 sticky bg-white top-0 z-10 flex items-center justify-center">
      <FlashcardCreate />
      </div>
      <div className="h-5/6 sticky top-0 z-0 bg-gray-400">
      <FlashcardList />
      </div>
    </div>
  )
}

export default App
