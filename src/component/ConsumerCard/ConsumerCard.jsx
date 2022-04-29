import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
const ConsumerCard = ({img,desc}) => {
  return (
    <Card
    hoverable
    cover={<img alt="example" src={img}  />}
  >
    <Meta  description={desc}/>
  </Card>
  )
}

export default ConsumerCard