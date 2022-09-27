import React from 'react'

const GifsGridItem = ({title, url}) => {

   

  return (
    <div className='card animate__animated animate__bounce '>
    <img src={url} alt={title}></img>
    <p>{title}</p> 
    </div>
  )
}

                              
export default GifsGridItem