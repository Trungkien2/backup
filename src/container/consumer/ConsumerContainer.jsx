import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ConsumerCard, Title } from "../../component";
import './Cs.scss'
const FeImg = require('../../assets/img/fe.jpg');
const miraeImg = require('../../assets/img/mirae.jpg');
const easyImg = require('../../assets/img/easy.jpg');
const ConsumerContainer = () => {
  return (
    <div className="cs-container">
      <Container fluid="xxl">
        <Row style={{marginBottom :'40px'}}>
            <Col>
            <Title Title ='Vay tiêu dùng' text='Nhiều đơn vị uy tín hỗ trợ vay tiêu dùng'/>
            </Col>
        </Row>
        <Row>
          <Col xxl="3">
            <ConsumerCard img={FeImg} desc='Vay tiền mặt FE Credit' />
          </Col>
          <Col xxl="3">
            <ConsumerCard img={easyImg} desc='Cho vay tiêu dùng tín chấp EASY CREDIT' />
          </Col>
          <Col xxl="3">
            <ConsumerCard img={miraeImg} desc='Vay tiền mặt nhanh Mirae Assets'/>
          </Col>
          <Col xxl="3">
            <ConsumerCard img={miraeImg}  desc='Vay tiêu dùng tính chất theo lương Mirae Assets'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConsumerContainer;
