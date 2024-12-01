import React from 'react'
import RegisterBox from '../components/RegisterBox'
import UnauthNavbar from '../components/UnauthNavbar'
import Footer from '../components/GeneralFooter'
const RegisterView = () => {
  return (
      <div>
          <UnauthNavbar />
          <RegisterBox />
          <Footer />
      </div>
  )
}

export default RegisterView
