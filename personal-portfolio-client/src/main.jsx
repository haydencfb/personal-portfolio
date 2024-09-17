import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import About from './components/2. About/About.jsx'
import Portfolio from './components/3. Portfolio/Portfolio.jsx'
import Contact from './components/4. Contact/Contact.jsx'
import Resume from './components/5. Resume/Resume.jsx'
import Error from './components/Error/Error.jsx'

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