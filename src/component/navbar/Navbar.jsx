import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { Container } from "reactstrap";
import "./Navbar.scss";
const Navbars = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="ld-navbar primary-color-bg" onScroll={console.log(window.pageYOffset)}>
      <Container fluid="xxl" className="ld-navbar__container">
        <div className="ld-navbar__home">
          <a href="#" className="ld-navbar__home-icons">
            <AiOutlineHome />
          </a>
        </div>
        {/* <ul className="ld-navbar__items ld-navbar__items-smallScreen ">
          <li className="ld-navbar__link">
            <a href="#" className="ld-navbar__href">
              Về chúng tôi
            </a>
          </li>
          <li className="ld-navbar__link">
            <a href="#" className="ld-navbar__href">
              Vay tiêu dùng{" "}
            </a>
          </li>
          <li className="ld-navbar__link">
            <a href="#" className="ld-navbar__href">
              Tuyển dụng
            </a>
          </li>
          <li className="ld-navbar__link">
            <a href="#" className="ld-navbar__href">
              Tin tức{" "}
            </a>
          </li>
          <li className="ld-navbar__link">
            <a href="#" className="ld-navbar__href">
              Liên Hệ
            </a>
          </li>
        </ul> */}
        <div className="ld-navbar__toggle ld-navbar__toggle-smallScreen ">
         {toggle? <AiOutlineClose className="ld-navbar__toggle-icon" onClick={()=>{setToggle(false)}}/> :<AiOutlineMenu  className="ld-navbar__toggle-icon" onClick={()=>{setToggle(true)}} />}
        

          {toggle && (
            <ul className="ld-navbar__items-menu-smallScreen ">
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Vay tiêu dùng </a>
              </li>
              <li>
                <a href="#">Tuyển dụng</a>
              </li>
              <li>
                <a href="#">Tin tức </a>
              </li>
              <li>
                <a href="#">Liên Hệ</a>
              </li>
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbars;
