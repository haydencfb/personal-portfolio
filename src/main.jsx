import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import About from './pages/about-page/about-page.jsx';
import Portfolio from './pages/dev-portfolio-page/dev-portfolio.jsx';
import Contact from './pages/contact-page/contact-page.jsx';
import Resume from './pages/resume-page/resume-page.jsx';
import Error from './pages/error-page/error-page.jsx';

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