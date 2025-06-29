import {NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='py-2 px-5 md:py-4 md:px-10 bg-zinc-800 flex items-center justify-between fixed top-0 right-0 w-full'>
        <div className='flex items-center gap-2'>
          <img src="https://cdn-icons-png.flaticon.com/512/4996/4996153.png" alt="logo" className='w-12 md:w-16 h-12 md:h-16 object-center object-cover' />
          <h1 className='text-gray-300 text-xl  md:text-3xl font-bold'>Student Diary</h1>
        </div>
        <ul className=' items-center gap-10 text-lg font-semibold text-gray-300 hidden md:flex'>
          <li className='hover:cursor-pointer hover:text-gray-100 transition-all duration-200 text-gray-100'>
           
          </li>
          <li className='hover:cursor-pointer hover:text-gray-100 transition-all duration-200'>
            
          </li>
          <li className='hover:cursor-pointer hover:text-gray-100 transition-all duration-200'>
           
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar