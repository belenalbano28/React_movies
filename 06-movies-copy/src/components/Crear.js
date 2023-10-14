import React, { useState } from 'react'
import { guardarStorage } from '../helpers/guardarStorage';

export const Crear = ({setListado}) => {
  const titulo='Add Movie';
  const [peli,setPeli]=useState({});
  const datosForm = e=>{
    e.preventDefault();
    let target=e.target;
    let titulo=target.titulo.value;
    let descripcion=target.descripcion.value;
    let peli={
      id: new Date().getTime(),
      titulo: titulo,
      descripcion:descripcion
    }
    setPeli(peli);
    setListado(elementos=>{
      return [...elementos,peli]
    });
    guardarStorage('pelis',peli);
    

  }
  
  return (
    <div className="add">
                <h3 className="title">{titulo}</h3>
               <strong>{(peli.titulo && peli.descripcion) && peli.titulo+' created.'}</strong> 
                <form onSubmit={datosForm}>
                    <input id='titulo' name='titulo' type="text" placeholder="Title"/>
                    <textarea placeholder="Description" name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
                    <input type='submit' id='save' value='Save'/>
                </form>
            </div>
  )
}
