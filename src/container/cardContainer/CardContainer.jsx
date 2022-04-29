import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Card } from "../../component";
import "./CardContainer.scss";
const viralMarketing = require('../../assets/img/viral-marketing.png')
const analytics = require('../../assets/img/analytics.png')

const CardContainer = () => {
  return (
    <div className="Card-container">
      <Container fluid='xxl'>
        <Row>
          <Col xxl='6' md='12'>
            <Card  title = 'Tìm kiếm việc làm nhiều vị trí hấp dẫn, cơ hội làm việc môi trường chuyên nghiệp' header = 'Tuyển Dụng' img = {viralMarketing}/>
          </Col>
          <Col xxl='6' md='12'>
            <Card title = 'QN solutions giải pháp và dịch vụ' header = 'Về chúng tôi' img = {analytics} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
