import React from "react";
// importando icones
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../../styles/reset.css";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="social-container">
        <p className="social">Rede Sociais </p>
        {/* icones da rede social com o link */}
        <Link to="https://github.com/JacquelineCasali/">
          <Icon.Github
            color="black"
            size={40}
            cursor="pointer"
            className="redesocial"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/jaquelinecasali/">
          <Icon.Linkedin
            color="#0077b5"
            size={40}
            cursor="pointer"
            className="redesocial"
          />
        </Link>

        <p className="social">©Desnvolvido por Jacqueline 2023 </p>
      </div>
    </footer>
  );
};
export default Footer;
