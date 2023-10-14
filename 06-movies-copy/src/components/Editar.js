import React from 'react'

export const Editar = ({peli,traerPelis,setEditar,setListado}) => {
    const titulo='Edit the movie';
    function editarPeli(e,id){
        e.preventDefault();
        const form=e.target;
        let peliculas_almacenadas=traerPelis();
        const index = peliculas_almacenadas.findIndex(peli=>peli.id===id);
       let pelicula={
        id:id,
        titulo:form.titulo.value,
        descripcion:form.descripcion.value
       }
       peliculas_almacenadas[index]=pelicula;
       console.log(peliculas_almacenadas);
       localStorage.setItem('pelis',JSON.stringify(peliculas_almacenadas));
       setListado(peliculas_almacenadas);
       setEditar(0);
    }
  return (
    <div className='edit_form'>
        <form onSubmit={e=>editarPeli(e,peli.id)}>
            <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo}/>
            <textarea name='descripcion' defaultValue={peli.descripcion} className='desccripcion_editada'></textarea>
            <input type='submit' className='editar' value='Edit'/>
        </form>
    </div>
  )
}
