import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home /> 
    <About /> 
    <Footer />
  </StrictMode>,
)
