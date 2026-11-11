import React from 'react';
import Header from '../componentes/cabecalho/header';
import Projetos from '../componentes/projetos/projetos';
import Skills from '../componentes/habilidades/skills';
import SobreMim from '../componentes/sobre/sobre';
import inicioImg from "../imagens/setas-cima.png";
import Inicio from '../componentes/inicio/inicio';

import "./perfil.css";
import Footer from '../componentes/rodape/footer';

const Perfil: React.FC = () => {
  return (
    <div id="mainProfile" className="bg-dark bg container-fluid">
      <Header />
      <Inicio />
      <SobreMim />
      <Skills />
      <Projetos />
      <div data-aos="fade-up-left" className="fixed-bottom d-flex scrollspy-example justify-content-end m-5">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={inicioImg} className="imgInicial" alt="" /></a>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
