import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Components/Route/route';
import AuthContibutor from './Components/AuthContributor/AuthContributor';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContibutor>
      <RouterProvider router={router} />
    </AuthContibutor>
  </React.StrictMode>,
)
