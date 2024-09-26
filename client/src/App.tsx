import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import ForgotPassword from './auth/Forgot-Password'
import VerifyEmail from './auth/Verify-Email'
import Navbar from './components/Navbar'
import MainLayout from './layout/MainLayout'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Navbar />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />
  },


])
function App() {

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
  )
}

export default App
