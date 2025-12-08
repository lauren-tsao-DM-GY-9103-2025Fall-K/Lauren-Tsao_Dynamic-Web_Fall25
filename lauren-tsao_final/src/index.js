import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './context/flashcards'  // Updated to flashcards context
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <App />
  </Provider>
)
