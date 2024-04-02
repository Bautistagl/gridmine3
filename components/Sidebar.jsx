'use client'

import Link from 'next/link'
import React from 'react'
import  supabase  from "../supabase"
import { useRouter } from 'next/navigation'


const Sidebar = ({}) => {


  const router = useRouter()

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        // Handle the error
        console.error('Sign out error:', error.message);
      } else {
        // Sign-out successful
        console.log('Sign out successful');
        router.push('/login') 
        // You may want to redirect or perform other actions after successful sign-out
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected error during sign out:', error);
    }
    
    
  };

  return (
    <>
    <nav className= 'sideNavbar'>
   
      <ul className='sideNavbar-ul'>
        <Link href="/dashboard">
      <img className='icono-sideBar-grid' src='/gridCorregido.png'/>
        </Link>
      <Link href="/dashboard">  
        <li style={{marginBottom:'3vh'}} className='sideNavbar-li'><img className='icon-sideNavbar2' src='/logoHome.png'/> Informes </li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SERVICIOS </li>
        <Link href="/mining">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/miningLogo.png'/>  Minería</li>
        </Link>
        
      
        <Link href="/billing">  
        <li style={{marginBottom:'3vh'}}  className='sideNavbar-li'><img className='icon-sideNavbar' src='/logoBilling.png'/>  Facturación</li>
        </Link>
       
       


        
      
        
      <button onClick={handleLogout} style={{marginTop:'7vh'}} className='logout-sidebar'> Logout </button>
   
      </ul>
          

          
          
    </nav>
       
    </>
  )
}

export default Sidebar