import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShieldHalved,
  faLock,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import useScrollToTop from "../../hooks/useScrollToTop";

const Footer = () => {
  useScrollToTop();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="logo-text">
            Loji<span>nha</span>
          </h2>

          <p className="footer-description">
            Tecnologia de ponta para quem busca performance e inovação.
          </p>

          <div className="footer-socials">
            <a href="/em-breve" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="/em-breve" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="/em-breve" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Atendimento</h3>

          <ul className="footer-list">
            <li>
              <FontAwesomeIcon
                icon={faClock}
                className="icon-blue"
                aria-hidden="true"
              />
              {" "}Seg a Sex: 08h às 18h
            </li>

            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon-blue"
                aria-hidden="true"
              />
              {" "}suporte@techstore.com
            </li>

            <li>
              <FontAwesomeIcon
                icon={faPhone}
                className="icon-blue"
                aria-hidden="true"
              />
              {" "}(85) 99999-9999
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Pagamento</h3>

          <div className="payment-methods">
            <FontAwesomeIcon
              icon={faCcVisa}
              size="2x"
              aria-label="Visa"
            />

            <FontAwesomeIcon
              icon={faCcMastercard}
              size="2x"
              aria-label="Mastercard"
            />
          </div>
        </div>

        <div className="footer-section">
          <h3>Segurança</h3>

          <div className="security-badges">
            <div className="security-item">
              <FontAwesomeIcon
                icon={faShieldHalved}
                aria-hidden="true"
              />

              <span>SSL Blindado</span>
            </div>

            <div className="security-item">
              <FontAwesomeIcon
                icon={faLock}
                aria-hidden="true"
              />

              <span>Compra Segura</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2026 Lojinha - Todos os direitos reservados</p>
      </div>

      <button
        id="scrollToTopBtn"
        className="scrollToTopBtn"
        aria-label="Voltar para o topo"
      />
    </footer>
  );
};

export default Footer;