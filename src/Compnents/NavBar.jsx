import React from 'react'

const NavBar = () => {
     return (
          <header className='w-full mt-3.5  bg-amber-900 flex flex-col justify-between items-center'>
               <div>
                    <img src='/logo.svg' alt="logo" className='w-[100px] h-[100px]' />
               </div>
               <div className='flex flex-co'>
                    <ul className=''>
                         <li>Home</li>
                         <li>Feature</li>
                         <li>Prize</li>
                         <li>Faq</li>
                    </ul>
               </div>
                {/* <div className='flex flex-col justify-center items-center'>
                    <ul className=''>
                         <li>Sigin</li>
                         <li>Geting Started</li>
                    </ul>
                </div> */}
          </header>
     )
}

export default NavBar