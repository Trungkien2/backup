import React from "react";
import { Carousel } from "antd";
import "./slider.scss";

const Slider = () => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "red",
  };
  return (
    <div className="slider">
      {" "}
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>ĐỘi NGŨ NHÂN VIÊN </h3>
        </div>
        <div>
          <h3 style={contentStyle}>DỊCH VỤ TUYỂN DỤNG THUÊ NGOÀI</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
