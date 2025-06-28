import React from 'react'
import Navbar from './Component/Navbar'
import Content from './Pages/Content'

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Content/>
      <button title='Add Student' className='h-16 md:h-24 w-16 md:w-24 rounded-full  flex items-center justify-center bg-amber-600 text-xl md:text-3xl fixed right-10 bottom-10 text-gray-200 hover:bg-amber-700 cursor-pointer transition-all duration-300 shadow-2xl'>
 +
      </button>
      
    </div>
  )
}

export default App