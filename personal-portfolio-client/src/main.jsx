import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Error from './components/Error.jsx'

import App from './App.jsx'
import classes from './styles/main.module.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: `/Portfolio`,
        element: <Portfolio />
      },
      {
        path: `/Contact`,
        element: <Contact />
      },
      {
        path: `/Resume`,
        element: <Resume />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)