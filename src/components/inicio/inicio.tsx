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
        <section id="inicio" className="d-md-flex vh-100 justify-content-md-around m-auto container-lg iniciobg font-monospace">
            

            <div className="d-flex justify-content-center align-items-center">
                <img src={profileImg} 
                    className="perfil-img d-flex w-50 justify-content-center "
                    alt="img-perfil"
                    data-aos="flip-left"
                    data-aos-duration="1500"/>
            </div>
            
            <div className="d-flex flex-column justify-content-evenly mx-5">
                <div className="d-flex flex-column justify-content-evenly h-25 text-start">
                    <h1 className="mt-5">Olá, me chamo <span>Caio Pereira</span></h1>
                    <h3 className="fw-semibold font-monospace d-inline">Desenvolverdor Web
                        <Typewriter
                          options={{
                              strings: ['Full-stack', 'Back-end', 'Front-end'],
                              autoStart: true,
                              loop: true,
                              wrapperClassName: "text-danger"
                            }}
                            />
                    </h3>

                </div>
                <div data-aos="zoom-in">
                    <p className="fs-5">Contatos:</p>
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
