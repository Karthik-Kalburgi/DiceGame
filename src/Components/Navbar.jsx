import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
            <nav className='bg-emerald-300 p-0.5  '>
                <ul className='display flex gap-10 justify-end'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Register</li>
                    <li>Login</li>
                    <button className='bg-black rounded text-red-500  p-1 h-8  '>Help</button>
                </ul>
                
            </nav>
        </div>
    </div>
  )
}

export default Navbar