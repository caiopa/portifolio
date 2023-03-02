import React from 'react';
import Header from '../components/header/header';
import Projetos from '../components/projetos/projetos';
import Skills from '../components/skills/skills';
import SobreMim from '../components/sobre/sobre';
import inicioImg from "../images/setas-cima.png"
import Inicio from "../components/inicio/inicio";

import "./perfil.css"
import Footer from '../components/footer/footer';



class Perfil extends React.Component {
  render() {
      return (

            <div className="bgdark">
                <Header/>
                <Inicio />
                <SobreMim />
                <Skills />
                <Projetos />
                <div  data-aos="fade-up-left"   className="fixed-bottom d-flex d-flex     scrollspy-example justify-content-end m-5"
                data-bs-spy="scroll"    data-bs-target="#simple-list-example"  data-bs-offset="0" data-bs-smooth-scroll="true">
                    <a href="#inicio" ><img src={inicioImg}     className="imgInicial" alt=""></img></a>
                </div>
                <Footer />
            </div>

        )
    }
}


export default Perfil;
