'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import  supabase  from "../../supabase"
import Swal from "sweetalert2"



export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  

  useEffect(()=>{
    async function getUser() {
      const {data: {user}} = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  },[])



  const handleSignIn = async () => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (res.error !== null) {
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: 'Email o contrasena incorrecta',
        });
      } else{
        window.localStorage.setItem('emailGridMine', res.data.user.email);
          router.push('/dashboard')
      
        }
     
  
    } catch (error) {
      console.error('Error during sign-in:', error.message);
  
      // Muestra una alerta SweetAlert2 con el mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: error.message,
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null)
  }


 

  if (loading) {
    return <h1> Loading...</h1>
  }

  if (user) {

    return (
      <div>
        <div>
          <h1> You&apos;re already logged in</h1>
          <button onClick={handleLogout}> Logout </button>
        </div>
      </div>
    )

  }

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
      <h2 className="login-title">Inicia sesion en tu cuenta de Grid Mine</h2>
     
     
      
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

     
        <button onClick={handleSignIn} className="login-submit" >
          Iniciar Sesión
        </button>
      
      
      <div className="member-container">
        <div className="member-login">
          No tenes cuenta?
          <Link href='/register'>
          <span className="member2-login"> Registrate! </span>
          </Link>
          
        </div>
      </div>
    </div>
    </div>
    </main>

    
  )

}