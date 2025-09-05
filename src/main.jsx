import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap import  --high priority because it override index.css


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
