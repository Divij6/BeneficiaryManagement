import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import UserDashboard from './components/Dashboard/UserDashboard.jsx'
import Login from './components/Authentication/Login.jsx'
import Signup from './components/Authentication/Signup.jsx'
import ForgotPassword from './components/Authentication/ForgotPasswords.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/beneficiaries' element={<UserDashboard/>}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route path='/forgot-password' element={<ForgotPassword />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
