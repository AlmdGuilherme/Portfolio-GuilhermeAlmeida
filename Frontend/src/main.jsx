import React from 'react'
import './index.css'
import reactDoom from 'react-dom/client'
import App from './App.jsx'

const root = reactDoom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
