import React from 'react'
import { Col, Container, Row } from "reactstrap";
import Desc from './Desc';
import { ConsumerCard, Title } from "./index";

import './style.scss'

const Tuyendung = () => {
  return (
    <div>
         <Container fluid="xxl">
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <Title Title="Tuyển dụng" />
          </Col>
        </Row>
        <Row>
          <div className='tuyen'>
              <h1>TUYỂN DỤNG NHÂN VIÊN TELESALE</h1>
          </div>

          <div className='list'>
              <ul>
                  <li>Loại làm việc : <a href="#">kinh doanh và sale</a></li>
                  <li>Loại công việc : <a href="#">Full-time</a></li>
                  <li>Địa điểm làm việc : <a href="#">HỒ CHÍ MINH</a></li>
                  <li>Lương : <a href="#">10-12 triệu</a></li>
              </ul>
          </div>
          <div className='desc'>
            <Desc Title ='Mô tả Công Việc:' desc={['Gọi KH theo data của các Ngân hàng có sẵn tư vấn và hỗ trợ KH rút tiền mặt từ thẻ tín dụng','Sales chỉ cần chốt và lấy thông tin hồ sơ KH có quan tâm.','Công việc hoàn tất hồ sơ có bộ phận khác hỗ trợ.','Không cần ra ngoài thị trường, không cần thẩm định.','Hồ sơ có tỉ lệ duyệt cao 99%.','Chi tiết trao đổi khi phỏng vấn.']}/>
            <Desc Title ='Làm việc tại:' desc ={['20/18 Nguyễn Trường Tộ, phường 13, quận 4, TP Hcm ']}/>
            <Desc Title ='Quyền lợi:' desc = {['Thu nhập: 10 triệu.','Chế độ phúc lợi xã hội đầy đủ (cty đóng 100% gói bảo hiểm Xh 4.750.000 sau 2 tháng thử việc).','Được du lịch, thưởng mỗi năm.','Cơ hội thăng tiến trong công việc 6 tháng xét duyệt 1 lần theo thành tích đạt được.','Thời gian làm việc: 8h30-17h30 từ t2- t6, thứ 7 làm việc từ 8h30-12h00, Chủ Nhật nghỉ.']}/>
            <Desc Title ='Kinh nghiệm / Kỹ năng chi tiết.:' desc ={['Không yêu cầu bằng cấp.','Không có kinh nghiệm sẽ được đào tạo.','Giao tiếp lưu loát, cẩn thận, nhạy bén.']}/>
            <Desc Title ='Thông tin liên hệ:' desc = {['email : atom.tuyendung@gmail.com', 'sdt LH: 093.312.1041']}/>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Tuyendung