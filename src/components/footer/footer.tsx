import React from 'react';
import "./footer.css"
import coracaoImg from "../../images/gifheart.gif"
class Footer extends React.Component {
   
  
  render() {
      return (
        <footer id="footer" className="p-3 m-auto my-5 borderFooter text-center fs-5 posiotion-bottom">
            <a href="#inicio" className="text-decoration-none a ">Feito com <img src={coracaoImg} alt="coracao" />por Caio Pereira</a>

        </footer>
        )
    }
}


export default Footer;
