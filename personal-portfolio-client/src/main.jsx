import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Footer from './components/Footer.jsx'
import classes from './styles/main.module.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    error: <h1>404 Not Found</h1>,
    children: [
      {
        
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Portfolio />
    <Contact />
    {/* <Resume /> */}
    <Footer /> 
  </StrictMode>,
)