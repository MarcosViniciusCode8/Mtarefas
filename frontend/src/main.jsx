import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Paginas from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paginas />
  </StrictMode>,
)
