import React, { useState } from "react";
import { Offcanvas, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideBarMenu.css";

const SidebarMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="sidebar-toggle" onClick={handleShow}>
        <i className="bi bi-layout-sidebar"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="side-bar-content">
        <Offcanvas.Header closeButton className="mt-3">
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="side-bar-options">
            <ListGroup.Item>
              <Link to="/functions" className="nav-link">
                Funciones
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/create-function" className="nav-link">
                Agregar Función
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMenu;
