import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import About1 from './components/About1'
import Question from './components/Question'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <div id='services'>
          <Services/>
        </div>

        <div id='about'>
          <About/>
        </div>

        <div id='about1'>
          <About1/>
        </div>

        <div id='question'>
          <Question/>
        </div>

        <div id='footer'>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default App