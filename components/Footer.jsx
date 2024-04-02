
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  
  return (
    <div className='fondo-footer'>
      
      <section className='container-footer'>
        <div className='columnas'> 
         <div className='columna-principal'>
            <div className='footer-titulo-principal'> 
              Need assistance? Contact Us!
            </div>
                   
                      <div className='redes-footer'>
              <a href='//www.linkedin.com'>
              <img style={{marginLeft:'0px'}} className='icon-redes' src={"/linkedin.png"}/>
              </a>
            
              <a href='//www.discord.com'>
                <img className='icon-redes' src={"/discord (1).png"}/>
              </a>

              <a href='//www.twitter.com'>
                <img className='icon-redes' src={"/twitter-sign.png"}/>    
              </a>
              <a href='//www.instragram.com'>
                <img className='icon-redes' src={"/instagram.png"}/>
              </a>
           </div>
           <button style={{marginTop:'30px',backgroundColor: '#36B079'}}> Contact us! </button>
           <button style={{marginTop:'30px',backgroundColor: '#36B079'}} > Support Center</button>

         </div>
      
         
         <div className='columna'> 
            
            <ul>
               <li>Hashrate Converter</li>
               <li>My Account</li>
               <li>Affiliates Home</li>
               <li>Who Are We</li>
            </ul>
         </div>
         <div className='columna'> 
          
            <ul>
              <li>Privacy Policy</li>
              <li> Shipping And Returns</li>
              <li> Frequently Asked Questions</li>
              <li>Terms and Conditions</li>
           
            </ul>
         </div>
        
        
      
        </div>
        <div className='licencias-footer'>
       
        <span> <a href='#'>  © 2024 Grid Mine  </a> </span>  
        <span> <a href='#'> Políticas de Privacidad   </a> </span> 
        <span> <a href='#'> Términos y condiciones  </a></span>
        </div>
    </section>
    </div>
  )
}

export default Footer

