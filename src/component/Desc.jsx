import React from 'react'
import './style.scss'
const Desc = ({Title,desc}) => {
 
  return (
    <div>
        <h3>{Title}</h3>
       <ul className='desc'>
       {desc.map((el,key)=>{
            return <li key={key}>{el}</li>
           
        })}
       </ul>
    </div>
  )
}

export default Desc