import React from 'react';
import deliveryImg from '../../images/projeto-delivery.png';
import receitasImg from '../../images/projeto-receitas.jpg';
import triviaImg from '../../images/projeto-trivia.png';
import githubImg from '../../images/GitHub2.jpg'
import musicIcon from '../../images/icon3.png';
import { motion } from "framer-motion";
import './projetos.css'
import { Nav } from 'react-bootstrap';

class Projetos extends React.Component {
  render() {
      return (
        <section id="projetos" className="text-center mw-75 h-100">
          <h3 data-aos="fade-up" className="my-5 a fs-2 text">Projetos</h3>
          <div className="d-flex flex-column w-75 m-auto ">
          <Nav.Link href="https://github.com/caiopa/AppDelivery" target="_blank" >
            <motion.div className="card mb-3 bg-black fs-5" whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} >
                <div className="row no-gutters bg-black" data-aos="fade-right"
                   >
                  <div className="col-md-4 col-sm ">
                    <img src={deliveryImg} className="card-img img-fluid rounded same-size-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Delivery</h5>
                      <p className="card-text">Pagina de cadastro e controle de vendas e entrega para uma delivery</p>
                      <p className='a'> Tecnologias: Reactjs, Nodejs, Context,Express, MySQL </p>
                    </div>
                  </div>
                </div>
             </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa/AppReceitas" target="_blank">
            <motion.div className="card mb-3 bg-black fs-5"  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} >
               <div className="row no-gutters bg-black" data-aos="fade-left">
                 <div className="col-md-4">
                   <img src={receitasImg} className="card-img img-fluid rounded same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">Receitas</h5>
                     <p className="card-text">Pagina de receitas, objetivo de consumir duas API externas.
                      </p>
                      <p className='a'> Tecnologias: Reactjs, JS, CSS,Context </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa/ProjetoGrupoTrivia" target="_blank">
            <motion.div className="card mb-3 bg-black fs-5" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} >
               <div className="row no-gutters bg-black"  data-aos="fade-right"    >
                 <div className="col-md-4">
                   <img src={triviaImg} className="card-img img-fluid rounded same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">Trivia Quiz</h5>
                     <p className="card-text">Jogo de perguntas e respostas baseado no Show do milhão, com o objetivo de acessar uma API externa</p>
                     <p className='a'> Tecnologias: Reactjs, JS, CSS,Context </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa" target="_blank">
            <motion.div className="card mb-3 bg-black fs-5" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
               <div className="row no-gutters bg-black" data-aos="fade-left">
                 <div className="col-md-4">
                   <img src={musicIcon} className="card-img img-fluid rounded same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8 img-fluid">
                   <div className="card-body">
                     <h5 className="card-title">Trybe Tunes</h5>
                     <p className="card-text">Pagina de pesquisa de musica com o objetivo de acessar uma API externda do Itunes usando React, JS 
                      </p>
                      <p className='a'> Tecnologias: Reactjs, JS </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa" target="_blank">
            <motion.div className="card mb-3 bg-black fs-5" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="row no-gutters bg-black" data-aos="fade-right" >
               <div className="col-md-4 img-fluid">
                 <img src={githubImg} className="card-img h-100 img-fluid rounded same-size-img" alt=".." />
               </div>
               <div className="col-md-8 ">
                 <div className="card-body">
                   <h5 className="card-title">Git Hub</h5>
                   <p className="card-text"> Outros projetos podem ser encontrado no meu git hub: github.com/caiopa 
                    </p>
                    <p className='a'> Tecnologias: Reactjs, Node JS, CSS, Context, Redux, MySQL, NoSQL, Python, Jest, Typescript </p>
                 </div>
               </div>
              </div>
            </motion.div>
          </Nav.Link>
          </div>
        </section>
        )
    }
}


export default Projetos;
