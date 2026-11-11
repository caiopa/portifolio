import React from 'react';
import cssImg from '../../imagens2/css3.svg';
import htmlImg from '../../imagens2/html-5.svg';
import jsImg from '../../imagens2/js.svg';
import nodejsImg from '../../imagens2/node.svg';
import pythonImg from '../../imagens2/py.svg';
import reactImg from '../../imagens2/react.svg';
import sqlImg from '../../imagens2/mysql.svg';
import tsImg from '../../imagens2/ts.svg';
import "./habilidades.css"




class Skills extends React.Component {
  state = {
    items: [0, 1, 2,]
  }
  
  render() {
      return (
        <section id="skills" className="w-75 m-auto d-flex flex-column justify-content-evenly mt-5" >
            <h3 className="a titulo-habilidades fs-2 text-center my-5" data-aos="fade-up" data-aos-duration="1500">Habilidades</h3>
            <ul className="d-flex align-items-center w-100 m-auto justify-content-evenly align-content-center ">
                <li><img src={cssImg} className="skillsImg " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" alt="cssImg" /></li>
                <li><img src={tsImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="tsImg" /></li>
                <li><img src={jsImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="jsImg" /></li>
                <li><img src={sqlImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="sqlImg" /></li>
                <li><img src={reactImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="reactImg" /></li>
                <li><img src={pythonImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="pythonImg" /></li>
                <li><img src={nodejsImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="nodejsImg" /></li>
                <li><img src={htmlImg} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="skillsImg" alt="htmlImg" /></li>
            </ul>
        </section>
        )
    }
}


export default Skills;
