'use client'


import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import  supabase  from "../../supabase"
import ComponentCard from "@/components/ComponentCard";




const MiningPage = () => {
  const [productos, setProductos] = useState([]);
  
  const userEmail = typeof window !== 'undefined' ? localStorage.getItem('emailGridMine') : null;
  useEffect(() => {
    const obtenerProductos = async () => {
      if (userEmail) {
        const { data, error } = await supabase
          .from('Mineros')
          .select('*')
          .eq('emailUsuario', userEmail);

        if (error) {
          console.error('Error al obtener productos:', error.message);
        } else {
          setProductos(data);
        }
      }
    };

    obtenerProductos();
  
    
  }, [userEmail]);
  
  const handleSession = async () => {
    try {
      const { data } = await supabase.auth.getUser();
      const user = data.user; // Assuming the user object is nested within the 'data' property
    
      // Now you can use the 'user' object
      console.log('User:', user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }



 
  return (
    <div className="container-dashboard">
     <Sidebar />

     <div>.</div>
                <div style={{marginLeft:'500px'}}>
                  
      
      <ul>
        {productos.map((producto) => (
          
         
            <div key={producto.id} className='grid-components'>
                   <ComponentCard producto={producto}/>
                   
                  </div>
          
        ))}
      </ul>
      </div>
    </div>
  )
}

export default MiningPage