import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import JSX from './App.jsx' 
  {/*  
import Components from './Components.jsx' */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <JSX />
   {/*   <Components />*/}
  </StrictMode>,
)
