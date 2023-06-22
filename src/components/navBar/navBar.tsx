import React from 'react';
import "../header/header.css"
import "../navBar/navBar.css"
import menuImg from "../../images/menu.png"
import menuCloseImg from "../../images/x2.png"
import 'bootstrap'
import ModalNav from '../modal/modal';



interface showModal {
  showModal: boolean
}


class NavBar extends React.Component<{}, showModal> {
  constructor() {
    super({}) 
    this.state = {
      showModal: false,
    }

    this.handleChangeModal = this.handleChangeModal.bind(this);

  }


  handleChangeModal() {
    this.setState({ showModal: !this.state.showModal });
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
                <a href="#sobreMim" className="ms-3 hover text text-white fs-5 text-decoration-none nav-link">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link hover mx-3 fs-5 text text-white text-decoration-none">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projetos" className="nav-link hover text text-white fs-5 text-decoration-non">Projetos</a>
              </li>
            </ul> 
          </nav>

          <button onClick={() => this.handleChangeModal()} type="button" className="btn text-info d-lg-none" ><img src={showModal ? menuCloseImg: menuImg} alt="img" /></button>
          {
            showModal && <ModalNav onClose={this.handleChangeModal}/>
 
          }
      </div>
    )
  }
}


export default NavBar;
