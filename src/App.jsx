import React from 'react'
import FormLogin from './components/Fragments/FormLogin'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

function App() {

  return (
    <div className="flex justify-center  min-h-screen items-center">
        {/* <LoginPage></LoginPage> */}
        <RegisterPage />

    </div>
  )
}



export default App
