import { Container, Row, Col } from "reactstrap";
import "./Header.scss";
import { AiOutlineMail, AiOutlinePhone,AiFillTwitterCircle,AiFillYoutube } from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'
const logoImg = require("../../assets/img/logo.png");
const Header = () => {
  return (
    <div className="header">
      <Container fluid='xxl' className="header__content">
        <Row>
          <Col xl = '4' md='3'>
            <div className="header__logo">
              <div className="header__logo-img">
                <img src={logoImg} alt="logo" />
              </div>
              <h1 className="header__title primary-color-text">QN Solutions</h1>
            </div>
          </Col>
          <Col xl='4' md='4'>
            <div className="header__contact header__contact-smallScreen">
              <p className="header__contact-item mgr">
                <AiOutlineMail className="header__contact-item__i" />
                <span >info@qnsolution.vn</span>
              </p>
              <p className="header__contact-item">
                <AiOutlinePhone className="header__contact-item__i"/>
                <span >0812 644 567</span>
              </p>
            </div>
          </Col>
          <Col xl = '4' md='3'>
          <div className="header__social">
            <a href="#" className="header__social-link"><BsFacebook/></a>
            <a href="#" className="header__social-link"><AiFillTwitterCircle/></a>
            <a href="#" className="header__social-link"><AiFillYoutube/></a>
          </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
