import React from 'react';
import "../header/header.css"
import "../navBar/navBar.css"
import Nav from 'react-bootstrap/Nav';
import menuImg from "../../images/menu.png"
import menuCloseImg from "../../images/x2.png"
import  'bootstrap'
import { Button, Modal, } from 'react-bootstrap';

interface showModal {
  showModal: boolean
}


class NavBar extends React.Component<{}, showModal> {
  constructor() {
    super({}) 
    this.state = {
      showModal: false,
    }

  /*   this.changePageBackgroundOnScroll(); */
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShowModal() {
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
          <nav className=" d-none d-lg-flex container-fluid navbar-expand-sm">
           <ul className="nav">
              <li className="nav-item">
                <a href="#sobreMim" className="aa changeColor btn btn-2 ms-3 text-danger fs-5 text-decoration-none nav-link">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link aa changeColor mx-3 fs-5 text-danger text-decoration-none">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projetos" className="changeColor aa nav-link text-danger fs-5 text-decoration-non">Projetos</a>
              </li>
            </ul> 
          </nav>

          <Button onClick={this.handleShowModal} variant="primary" className="d-lg-none bgdiv"><img src={this.verifyModal()} alt="..." /></Button>

          <Modal show={showModal} onHide={this.handleCloseModal} className="fullscreen-modal bgOff">
             <Modal.Header closeButton closeVariant="white" className="modalHeaderBg">
             </Modal.Header>
             <Modal.Body className='modalBodyBg'>
              <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link className="aa fs-5" href="#inicio" >Inicio</Nav.Link>
                <Nav.Link className="aa fs-5" href="#sobreMim" eventKey="link-1">Sobre mim</Nav.Link>
                <Nav.Link className="aa fs-5" href="#skills" eventKey="link-2">Skills</Nav.Link>
                <Nav.Link className="aa fs-5" href="#projetos">
                  Projetos
                </Nav.Link>
              </Nav>
             </Modal.Body>
             <Modal.Footer className="modalHeaderBg">
               <Button variant="info" onClick={this.handleCloseModal}>
                 Fechar
               </Button>
             </Modal.Footer>
          </Modal>
       
      </div>
    )
  }
}


export default NavBar;
