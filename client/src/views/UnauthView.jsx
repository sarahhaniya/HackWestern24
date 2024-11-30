import React from 'react'
import UnauthNavbar from '../components/UnauthNavbar'
import UnauthHero from '../components/UnauthHero'
import UnauthOurMission from '../components/UnauthOurMission'
import Footer from '../components/GeneralFooter'

const UnauthView = () => {
  return (
    <div>
          <UnauthNavbar />
          <UnauthHero />
          <UnauthOurMission />
          <Footer />
    </div>
  )
}

export default UnauthView
