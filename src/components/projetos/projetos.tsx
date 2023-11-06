import React from 'react';
import deliveryImg from '../../images/projeto-delivery.png';
import receitasImg from '../../images/projeto-receitas.jpg';
import ecommerce from '../../images/ecommerce.png';
import githubImg from '../../images/GitHub2.jpg'
import musicIcon from '../../images/icon3.png';
import { motion } from "framer-motion";
import './projetos.css'
import { Nav } from 'react-bootstrap';

class Projetos extends React.Component {
  render() {
      return (
        <section id="projetos" className="text-center w-75 m-auto mt-5">
          <h3 data-aos="fade-up" className="my-5 a fs-2">Projetos</h3>
          <div className="d-flex flex-column w-75 m-auto ">
          <Nav.Link href="https://app-full-stack-pi.vercel.app" target="_blank">
            <motion.div className="card mb-3 bg-dark fs-5 border-0" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} >
               <div className="row no-gutters bg-dark"  data-aos="fade-right"    >
                 <div className="col-md-4 m-auto">
                   <img src={ecommerce} className="card-img img-fluid  same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">CPA Store</h5>
                     <p className="card-text">Loja de e-commerce</p>
                     <p className='a'> Tecnologias: Reactjs, Nextjs, NextAuth, Typescript, Tailwindcss, CSS, Context, Stripe, Nodejs, Prisma, Supabase </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa/AppDelivery" target="_blank" >
            <motion.div className="card mb-3 bg-dark border-0 fs-5" whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} >
                <div className="row no-gutters bg-dark" data-aos="fade-right"
                   >
                  <div className="col-md-4 col-sm m-auto">
                    <img src={deliveryImg} className="card-img img-fluid  same-size-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Delivery</h5>
                      <p className="card-text">Pagina de cadastro e controle de vendas e entrega de uma delivery</p>
                      <p className='a'> Tecnologias: Reactjs, Nodejs, Context, Express, MySQL </p>
                    </div>
                  </div>
                </div>
             </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa/AppReceitas" target="_blank">
            <motion.div className="card mb-3 bg-dark fs-5 border-0"  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} >
               <div className="row no-gutters bg-dark" data-aos="fade-left">
                 <div className="col-md-4 m-auto">
                   <img src={receitasImg} className="card-img img-fluid  same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">Receitas</h5>
                     <p className="card-text">Pagina de receitas, objetivo de consumir duas API externas.
                      </p>
                      <p className='a'> Tecnologias: Reactjs, JS, CSS, Context </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          
          <Nav.Link href="https://beat-music.vercel.app/" target="_blank">
            <motion.div className="card mb-3 bg-dark fs-5 border-0" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
               <div className="row no-gutters bg-dark" data-aos="fade-left">
                 <div className="col-md-4 m-auto">
                   <img src={musicIcon} className="card-img img-fluid  same-size-img" alt="..."/>
                 </div>
                 <div className="col-md-8 img-fluid">
                   <div className="card-body">
                     <h5 className="card-title">BeatMusic</h5>
                     <p className="card-text">Pagina de pesquisa de musica com o objetivo de acessar uma API externda do Itunes, favoritar as musicas </p>
                      <p className='a'> Tecnologias: Reactjs, JS, React Router, Tailwindcss </p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </Nav.Link>
          <Nav.Link href="https://github.com/caiopa" target="_blank">
            <motion.div className="card mb-3 bg-dark fs-5 border-0" whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="row no-gutters bg-dark" data-aos="fade-right" >
               <div className="col-md-4 img-fluid m-auto">
                 <img src={githubImg} className="card-img h-100 img-fluid  same-size-img" alt=".." />
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
