import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Row>
        <Col className="text-center">
          <p className="footer-address">
            Corrientes 1120, Bella Vista, Corrientes, Argentina
          </p>
          <a
            href="https://www.google.com/maps?q=Corrientes+214,+Bella+Vista,+Corrientes,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            <i class="bi bi-geo-alt"></i> Ver en Google Maps
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
