import React from 'react'
import { Card,Button } from 'antd';

import './Card.scss'

const Cards = ({title,img,header}) => {
  return (
    <Card className='card'>
    <div className='card-img'>
    <img src={img} />
    </div>
    <h2>{header}</h2>
    <p>{title}</p>
    <Button type="primary" style={{background:'#DAA267',fontSize :'15px'}}>CHI TIẾT</Button>
  </Card>
  )
}

export default Cards