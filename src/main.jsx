import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import ContactUs from './components/ContactUs.jsx'
import { CssBaseline } from '@mui/material'
import ThemeContextProvider from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeContextProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeContextProvider>
  </React.StrictMode>,
)
