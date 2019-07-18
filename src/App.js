import React, {Component} from 'react';
import Slider from "react-slick";
import { HashRouter} from "react-router-dom";

import './App.css';
// import './index.js'

class App extends Component {
  constructor() {
    super()
    this.state={
      showMe:false,
      hideMe: true
    }
  }
  operation()
  {
    this.setState({
      showMe:!this.state.showMe
    });
    this.setState({
      hideMe:!this.state.hideMe
    });
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="group">
        <div className="left">
          <Slider {...settings}>
            <div>
              <img alt="detalhe loja" className="fotos" src="fotos/1_detalhe_loja.jpg"/>
            </div>
            <div>
              <img alt="telhado" className="fotos" src="fotos/2_telhado.jpg"/>
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
        </div>
        <div className="right" onClick={()=>this.operation()}>
          <HashRouter>
        <div className="vertical-align">

            {
              this.state.hideMe?
                <img className="logotipo" src="parenteses.png" alt="1"/> 
              :true
            }

            {
              this.state.showMe?
              <div className="horizontal-align">
                <p><img className="logo" src="fotos/modos_logo.jpg" alt="Modos - arquitectura, logotipo."/> </p>
                <p><a className="addressFont" href="mailto:geral@modosatelier.pt"> geral@modosatelier.pt </a> </p>
                <p><img className="morada" src="fotos/Morada.jpg" alt="Rua Aristides de Sousa Mendes, numero 27 fração A 3100-510 Pombal"/> </p>
              </div>
              :null
            }
        </div>
      </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;