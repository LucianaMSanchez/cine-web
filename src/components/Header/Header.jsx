import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SidebarMenu from "../SideBarMenu/SideBarMenu";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={6} className="d-flex align-items-center">
            <SidebarMenu />
            <Navbar.Brand className="header-title">
              <Link to="/" className="header-title-link">
                Epic Cinema
              </Link>
            </Navbar.Brand>
          </Col>

          <Col xs={6} className="text-end">
            <span className="header-subtitle">
              🎬 Donde los clásicos vuelven a la gran pantalla
            </span>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
