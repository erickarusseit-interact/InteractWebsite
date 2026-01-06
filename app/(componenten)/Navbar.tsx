import React from 'react';


const Navbar = function (){
  return <div className='flex items-center justify-between bg-neutral-950 py-3 px-20 h-fit w-full border-b-1 border-b-neutral-800'>
          <h4 className='text-neutral-100 h-fit'>Interact</h4>
          <div className='flex space-x-8 items-center h-fit'> 
            <span className='text-neutral-100'>Webentwicklung</span>
            <span className='text-neutral-100'>UX Design</span>
            <span className='text-neutral-100'>Marktfoschung</span>
            <span className='text-neutral-100'>Karriere</span>
            <span className='text-neutral-100'>Kontakt</span>
          
          </div>
  </div>
  
}

export default Navbar;
