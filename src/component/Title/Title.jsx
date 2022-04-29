import React from 'react';
import './Title.scss';
const Title = ({Title,text}) => {
  return (
    <div className='title'>
        <h2>{Title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Title