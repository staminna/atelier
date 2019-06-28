import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img href="public/fotos/1_detalhe_loja.jpg"/>
        </div>
        <div>
          <img href="../public/fotos/1_detalhe_loja.jpg"/>
        </div>
      </Slider>
    );
  }
}