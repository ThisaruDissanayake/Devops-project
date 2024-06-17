import React from 'react';
import {Link} from 'react-router-dom';

const SigninBtn_1 = ({destination = '/signin'}) => {
  return (
    <Link to={destination} className='bg-indigo-800 text-white text-2xl font-[poppins] py-2 px-6 rounded md:ml-20 hover:bg-indigo-400 
    duration-500'>
     Sign In
  
    </Link>
  )
}

export default SigninBtn_1

