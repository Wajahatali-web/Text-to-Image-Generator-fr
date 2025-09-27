import React from 'react'
import Header from '../components/Header/Header'
import Steps from '../components/Steps/Steps'
import Description from '../components/Description/Description'
import Testinomials from '../components/Testinomials/Testinomials'
import GenerateBtn from '../components/GenerateBtn/GenerateBtn'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testinomials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
