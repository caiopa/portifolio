import React from 'react';
import "./sobre.css"



class SobreMim extends React.Component {
   
  
  render() {
      return (
          <div className="w-75 m-auto text-center boderSobreMim px-4" >
            <h3 id="sobreMim" className="a text-center mb-5 fs-2" data-aos="fade-up" data-aos-duration="1000">Sobre mim</h3>
              <div className='fs-5'>
                <p className="text-justify lh-base" data-aos="fade-up">
                Tenho 29 anos sou de Volta Redonda - Rj, formado em Engenharia Civil e Desenvolvedor Web Full-Stack, possuo habilidades em back-end, front-end e banco de dados, tenho experiencia anteriores em manutenção elétrica industrial, residencial e engenharia civil, como fiscalização de obra e projetos, um pouco dos meus hobbies é, viajar, ver filmes, séries, comer, jogar, codar, estar com amigos e família.
                </p>
                <p className="text-justify lh-base" data-aos="fade-up">
                  Meu objetivo é utilizar minhas habilidades para criar soluções eficientes e de alta qualidade. Sou apaixonado por tecnologia e estou sempre buscando aprender mais para aprimorar meus conhecimentos e desenvolver soluções inovadoras.
                </p>
              </div>  
          </div>
        )
    }
}


export default SobreMim;
