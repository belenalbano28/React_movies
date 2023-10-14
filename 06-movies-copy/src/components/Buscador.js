import React, { useState } from 'react'

export const Buscador = ({listado,setListado}) => {
  const [busqueda,setBusqueda]=useState('');
  const [noEncontrado,setNoEncontrado]=useState(false);
  function buscarPeli(e){
    setBusqueda(e.target.value);
    let pelis_encontradas=listado.filter(peli=>{
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    if(busqueda.length<=1 || pelis_encontradas<=0){
      pelis_encontradas=JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }
    
    setListado(pelis_encontradas);
  }
  return (
    <div className="search">
                <h3 className="title">Search: {busqueda}</h3>
                {(noEncontrado==true) && (
                  <span className='no-encontrado'>We can't find it! </span>
                )}
                <form>
                    <input onChange={e=>buscarPeli(e)} type="text" name="busqueda" id="serach_field" autoComplete='off'/>
                    <button>Go</button>
                </form>
            </div>
  )
}
