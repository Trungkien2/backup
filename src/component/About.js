import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ConsumerCard, Title } from "./index";

import "./style.scss";

const About = () => {
  return (
    <div>
      <Container fluid="xxl">
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <Title Title="Về chúng tôi" />
          </Col>
        </Row>
        <Row>
          <div className="about-content">
            <h1>Qn Solutions</h1>
            <p>
              Qn Solutions là cầu nối để các doanh nghiệp tìm được các nhân tài
              phù hợp với sự phát triển của doanh nghiệp
            </p>
            <p>
              Qn Solutions là cầu nối để giúp nhân tài tìm được một môi trường
              để phát triển sự nghiệp trong tương lai.
            </p>
          </div>

          <div className="about-content">
            <h1>Qn Solutions</h1>
            <p>
              Trở thành công ty Dịch vụ Tuyển dụng luôn hiểu được hiểu được nhu
              cầu mong muốn của các Doanh nghiệp một cách tối ưu. Hành trình vạn
              dặm bắt đầu từ bước đầu tiên không bao giờ là quá muộn nếu chúng
              ta tuyển chọn là những con người có thể phát triển của Doanh
              nghiệp. Chính vì vậy, khâu chọn những nhân tố có thể song hành
              cùng Doanh nghiệp là một việc chúng ta cần tập trung xây dựng đầu
              tiên. Đặt được dấu ấn thương hiệu “Ldbank” là doanh nghiệp về Dịch
              vụ Tuyển dụng Top 10 của Việt Nam trong giai đoạn từ 2021 – 2025.
            </p>
          </div>
          <div className="about-content">
            <h1>Qn Solutions</h1>
            <p>
              Qn Solutions cam kết mang đến từng công việc phù hợp, chất lượng
              cho các ứng viên cũng như cho các nhà tuyển dụng, tình yêu và
              trách nhiệm cao của mình đối với cuộc sống người lao động gắn kết
              với các doanh nghiệp.
            </p>
            <p>
              Qn Solutions hiện được biết đến như là công ty cung cấp nhân sự,
              với đội ngũ nhân viên trẻ trung và chuyên gia nhiều kinh nghiệm
              trong thị trường tài chính Việt Nam.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
