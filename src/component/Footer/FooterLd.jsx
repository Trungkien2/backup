import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Footerld.scss'
const FooterLd = () => {
  return (
    <div className='footerld'>
        <Container fluid='xxl'>
            <Row style={{paddingTop:'20px'}}>
                <Col xxl= '3'>
                    <div className='footerld__title'>
                        <h2>Qn solutions</h2>
                        <p>Chúng tôi, hiện được biết đến như là công ty cung cấp nhân sự, với đội ngũ nhân viên trẻ trung và chuyên gia nhiều kinh nghiệm trong thị trường tài chính Việt Nam.</p>
                    </div>
                </Col>
                <Col xxl= '3' md='4'>
                    <div className='footerld__list'>
                        <h4>Về chúng tôi</h4>
                        <ul>
                            <li>Liên Hệ</li>
                            <li>Giới thiệu</li>
                            <li>Đối tác</li>
                        </ul>
                    </div>
                </Col>
                <Col xxl= '3' md='4'>
                <div className='footerld__list'>
                        <h4>Hoạt động</h4>
                        <ul>
                            <li>Tin Tức</li>
                            <li>Blog Chia sẽ</li>
                            <li>Tuyển dụng</li>
                        </ul>
                    </div>
                </Col>
                <Col xxl= '3' md='4'>
                <div className='footerld__list'>
                        <h4>Nổi Bật</h4>
                        <ul>
                            <li>Vay tiêu dùng</li>
                           
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterLd
