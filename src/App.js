import React from 'react';
// import logo from './logo.svg';
import './App.css';
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
          <img alt="detalhe loja" className="fotos" src="fotos/1_detalhe_loja.jpg"/>
        </div>
        <div>
          <img alt="telhado" className="fotos" src="fotos/2_telhado_editado.jpg"/>
        </div>
        <div>
          <img alt="Santa luzia" className="fotos" src="fotos/3_santa_lusia.jpg"/>
        </div>
        <div>
          <img alt="O Tacho" className="fotos" src="fotos/4_o_tacho.jpg"/>
        </div>
        <div>
          <img alt="two living" className="fotos" src="fotos/6_two_living.jpg"/>
        </div>
        <div>
          <img alt="Figueira" className="fotos" src="fotos/7_figueira_editado.jpg"/>
        </div>
      </Slider>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="Textwelcome">
//           Bemvindo a <code>Modo(s)</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           ().
//         </a>
//       </header>
//     </div>
//   );
// }

