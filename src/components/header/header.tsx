import React from 'react';
import NavBar from '../navBar/navBar';
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import avaImg from "../../images/avatar.gif"
import Draggable from 'react-draggable';
AOS.init();



class Header extends React.Component {
  

  render() {
      return (
         <header id="headerProfile" className="fs-5 w-100 fixed-top d-flex m-auto justify-content-around align-items-center header-h borderHeader "
          > 
           <div className="fw-bold" data-aos="">
            <span className="letter">B</span>
            <span className="letter">e</span>
            <span className="letter">m</span>
            <span className="letter ms-2">V</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">d</span>
            <span className="letter">o</span>
            <Draggable>
              <img className="imageAvatar ms-3" src={avaImg} alt="avatar"></img>
            </Draggable>
           </div>
            <NavBar />
        </header>
        )
    }
}


export default Header;
