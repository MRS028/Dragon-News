import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from '../src/Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)