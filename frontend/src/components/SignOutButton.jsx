import React from 'react'
import {Link} from 'react-router-dom';

function SignOutButton({destination = '/' }) {
  return (
    <Link to={destination} className='bg-indigo-800 text-2xl text-white font-[poppins] py-2 px-6 rounded md:ml-20 hover:bg-indigo-400 duration-500'>
     Sign Out
  
    </Link>
  )
}
export default SignOutButton