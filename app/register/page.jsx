'use client'


import {  useState } from "react"
import  supabase  from "../../supabase"
import Swal from 'sweetalert2';


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        console.error('Sign-up error:', error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      } else {
        
  
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registro exitoso! Le envíamos un mail de confirmacion.',
          confirmButtonText: '<a href="/login">OK</a>'
        });
        
      }
    } catch (error) {
      console.error('Unexpected error during sign-up:', error);
      Swal.fire({
        icon: 'error',
        title: 'Este mail esta en uso',
        text: 'Intenta crear una cuenta con un mail distinto',
      });
    }
  };
  

  


 

//   if (loading) {
//     return <h1> Loading...</h1>
//   }

 

  return (
    <main>
        
     

        <div className='contenedor-login'> 
    <div className='textos-login'> 
    <div> Grid Mine </div>
    <h1>Bienvenido a Grid Mine</h1>
    {/* <span> <img alt='' src=''/> Read the Grid Cloud docs </span>
    <span> <img alt='' src=''/> See whats new with Grid Cloud </span>
    <span> <img alt='' src=''/> Join the community </span> */}


    </div>
    <div className="login-form" >
      <h2 className="login-title">Registrate en Grid Mine</h2>
     
     
      
      <input
        placeholder="Email"
        className="login-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
       <div className="input-container">
     <input
       className="login-input"
       type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      //  type={view ? 'text' : 'password'}
     />
     {/* <Image onClick={()=>{setView(!view)}} alt='' src={view ? '/hide2.png' : '/view.png'} width={25} height={25}/> */}
</div>

     
        <button onClick={handleSignUp} className="login-submit" >
          Crear Cuenta
        </button>
      
      
      {/* <div className="member-container">
        <div className="member-login">
          No tenes cuenta?
          <Link href='/register'>
          <span className="member2-login"> Registrate! </span>
          </Link>
          
        </div>
      </div> */}
    </div>
    </div>
    </main>

    
  )

}