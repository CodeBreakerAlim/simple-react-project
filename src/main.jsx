import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Routes } from 'react-router-dom'
import router from './components/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

      <App />
    </RouterProvider>
    
  </StrictMode>,
)
