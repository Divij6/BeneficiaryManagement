import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import UserDashboard from './components/Dashboard/UserDashboard.jsx'
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/dashboard' element={<UserDashboard/>}/>
      <Route path='/register' element={<RegistrationForm></RegistrationForm>}/>
      <Route path='/beneficiaries' element={<UserDashboard/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
