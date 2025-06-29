import React from 'react'
import Navbar from './Component/Navbar'
import Content from './Pages/Content'
import AddCard from './Component/AddCard'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Content />
      <AddCard />

    </div>
  )
}

export default App