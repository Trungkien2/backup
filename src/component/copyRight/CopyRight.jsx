import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './cpr.scss'
const CopyRight = () => {
  return (
    <div className='cpr'>
        <Container fluid='xxl'>
            <Row>
                <Col xxl='6'>
                    <div>
                        <p>Copyright © 2021 ldbank.vn. All rights reserved.</p>
                    </div>
                </Col>
                <Col xxl='6'>
                        <div>
                           <ul>
                               <li>Hồ Chí Minh</li>
                               <li>info@ldbank.vn</li>
                               <li>www.ldbank.vn</li>
                           </ul>
                        </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CopyRight