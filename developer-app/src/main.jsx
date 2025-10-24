// Import React library
import React from 'react'
// Import createRoot to render the app
import { createRoot } from 'react-dom/client'
// Import the main App component
import App from './App'
// Import CSS styles
import './index.css'

// Get the root element from HTML
const rootElement = document.getElementById('root')

// Create a root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)