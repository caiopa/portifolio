import React from 'react';
import "../header/header.css"
import "../navBar/navBar.css"
import menuImg from "../../images/menu.png"
import menuCloseImg from "../../images/x2.png"
import  'bootstrap'
import imgFechar from "../../images/fechar3.png"


interface showModal {
  showModal: boolean
}


class NavBar extends React.Component<{}, showModal> {
  constructor() {
    super({}) 
    this.state = {
      showModal: false,
    }

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShowModal(): void {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

verifyModal() {
  const { showModal } = this.state
  if(showModal) {
    return (menuCloseImg)
  } else {
    return (menuImg)
  }
}


  render() {
    const { showModal } = this.state
      return (
        <div>
          <nav  className=" d-none d-lg-flex navbar-expand-sm">
           <ul className="nav">
              <li className="nav-item">
                <a href="#sobreMim" className="aa changeColor ms-3 text-danger fs-5 text-decoration-none nav-link">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link aa changeColor mx-3 fs-5 text-danger text-decoration-none">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projetos" className="changeColor aa nav-link text-danger fs-5 text-decoration-non">Projetos</a>
              </li>
            </ul> 
          </nav>

          <button onClick={!showModal ? this.handleShowModal : this.handleCloseModal} type="button" className="btn text-info d-lg-none" ><img src={showModal ? menuCloseImg: menuImg} alt="img" /></button>
          {
            showModal && 
            (
              <div data-aos="zoom-out-down" id="modal" className='dialog d-flex flex-column justify-content-between'> 
                <nav className='mt-3 d-flex flex-column'>
                   <a className="aa fs-5" href="#inicio" >Inicio</a>
                   <a className="aa fs-5" href="#sobreMim" >Sobre mim</a>
                   <a className="aa fs-5" href="#skills">Skills</a>
                   <a className="aa fs-5" href="#projetos">
                     Projetos
                   </a>
                </nav>
                <footer className="w-100 d-flex justify-content-center">
                  <button type="button" onClick={this.handleCloseModal} className="buttonClose w-100 text-white"><img src={imgFechar}alt="img fechar"></img></button>
                </footer>
               </div>
 )
          }
      </div>
    )
  }
}


export default NavBar;
