import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myCreatedRoute = createBrowserRouter([
  {
path: '/',
element: <div>Home page</div>
  },
  {
    path: '/about',
    element: <div>About page</div>
  },
  {
    path: '/profile',
    element: <div>Profile page</div>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)

//  27 dekha hoiche