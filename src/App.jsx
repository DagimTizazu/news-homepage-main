import React from 'react'
import './main.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Aside from './Aside.jsx'
import Trending from './Trending.jsx'

function App() {

  return (
    <>
      <Nav />
      <div role='main' className='desktop-grid'>
        <Hero />
        <Aside />
        <Trending />
      </div>
    </>
  )
}

export default App
