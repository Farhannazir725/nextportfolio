'use client'

import React, { useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
 
  return (
    <>
    <nav className="navbar">
   
    <div className="container">
        <Link href='/' style={{textDecorationColor:'transparent'}}><span>Madhav Goyal</span></Link>
        <div className='menu' onClick={()=>{setMenuOpen(!menuOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
            <ul className={menuOpen ? "open": ""}>
               <li> <Link href='/'>Home</Link></li>
               <li> <Link href='#about'>About</Link></li>
               <li><Link href='#services'>Services</Link></li>
               <li><Link href='#contactus'>Contact</Link></li>
               <li><Link href='/gallery'>Gallery</Link></li>
               <li> <Link href='#faq'>Faq's</Link></li>            
               <li><Link href='#contactus' className='btn'>Try Me</Link></li>
  
            </ul>

            
        
    </div>
</nav>
    </>
  )
}
