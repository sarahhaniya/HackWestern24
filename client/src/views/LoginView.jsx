import React from 'react'
import UnauthNavbar from '../components/UnauthNavbar'
import Footer from '../components/GeneralFooter'
import LoginBox from '../components/LoginBox'
const LoginView = () => {
  return (
    <div>
      <UnauthNavbar />
      <LoginBox />
      <Footer />
    </div>
  )
}

export default LoginView
