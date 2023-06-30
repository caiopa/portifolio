import React from 'react';
import "./inicio.css"
import profileImg from "../../images/eu123.png"
import linkedinImg from "../../images/linkedin.png"
import github from "../../images/github.png"
import emailImg from "../../images/blackemail.png"
import Typewriter from "typewriter-effect";

class Inicio extends React.Component {
   
    render() {
      return (
        <section id="inicio" className="d-md-flex py-sm-5 min-vh-100 w-75 m-auto justify-content-md-around font-monospace">
            

            <div className="d-flex justify-content-center my-5 py-5 align-items-center">
                <img src={profileImg} 
                    className="perfil-img d-flex justify-content-center imgProfile "
                    alt="img-perfil"
                    data-aos="flip-left"
                    data-aos-duration="1500"/>
            </div>
            
            <div className="d-flex flex-column justify-content-evenly mx-5">
                <div className="d-flex flex-column justify-content-evenly h-25 text-start">
                    <h2 className="">Olá, me chamo <span className='text text-info '>Caio Pereira</span></h2>
                    <h3 className="fw-semibold font-monospace d-inline">Desenvolvedor Web
                        <Typewriter
                          options={{
                              strings: ['Full-stack', 'Back-end', 'Front-end'],
                              autoStart: true,
                              loop: true,
                              wrapperClassName: "text-info"
                            }}
                            />
                    </h3>

                </div>
                <div data-aos="zoom-in">
                    <p className="fs-5 my-4">Contatos:</p>
                    <a href="https://www.linkedin.com/in/caiopantunes/" target="_blank" rel="noreferrer"><img src={linkedinImg}
                    className="imagemContato"
                    alt="linkedin"></img></a>
                    <a href="https://www.github.com/caiopa/" target="_blank" 
                    rel="noreferrer"><img src={github}
                    className="imagemContato mx-3"
                    alt="github"></img></a>
                    <a href="mailto:caioefg@gmail.com" target="_blank" 
                    rel="noreferrer"><img src={emailImg}
                    className="imagemContato"
                    alt="email"></img></a>
                    <p className='mt-3 fs-5'>Tel: +55 (24) 99978-0577</p>
                </div>

            </div>
        </section>
        )
    }
}


export default Inicio;
