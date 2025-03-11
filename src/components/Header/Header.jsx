import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container className="header-title-container">
        <Navbar.Brand className="header-title">
          🎬 Cine Retro Épico
        </Navbar.Brand>
        <span className="header-subtitle">
          ✨ Donde los clásicos vuelven a la gran pantalla
        </span>
      </Container>
    </Navbar>
  );
};

export default Header;
