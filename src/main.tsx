import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { db } from './firebase/firebase.ts'
import { ref, set } from 'firebase/database'

set(ref(db, "users/"), {"login": "admin123", "senha": "admin123"})



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App /> 
  </StrictMode>,
)
