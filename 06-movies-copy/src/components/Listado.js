import React, { useEffect, useState } from 'react'
import { guardarStorage } from '../helpers/guardarStorage';
import { Editar } from './Editar';

export const Listado = ({listado,setListado}) => {
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    traerPelis();
  }, [])
  function traerPelis() {
    let elementos = JSON.parse(localStorage.getItem('pelis'));
    setListado(elementos);
    return elementos;
  }
  function borrarPeli(id){
    let peliculas=JSON.parse(localStorage.getItem('pelis'));
    let peliculas_nuevo=peliculas.filter(peli=> peli.id!==parseInt(id));
    setListado(peliculas_nuevo);
    localStorage.setItem('pelis',JSON.stringify(peliculas_nuevo));
  }
  return (
    <>
      {listado != null ? 
       listado.map(peli => {
        return (
          <article className="peli-item" key={peli.id}>
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button onClick={()=>{
              setEditar(peli.id);
            }} className="edit">Edit</button>
            <button onClick={()=>borrarPeli(peli.id)} className="delete">Delete</button>
            {editar===peli.id&& (
              <Editar peli={peli}
               traerPelis={traerPelis}
               setEditar={setEditar}
               setListado={setListado}></Editar>
            )}
          </article>
        );
      }
      )
      : <h2>There is not movies here! Lets add them.</h2>
      }
    </>
  )
}

