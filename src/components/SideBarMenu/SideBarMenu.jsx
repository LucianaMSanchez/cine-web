import React, { useState } from "react";
import { Offcanvas, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SidebarMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="sidebar-toggle" onClick={handleShow}>
        <i className="bi bi-layout-sidebar"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>
              <Link to="/add-function" className="nav-link">
                ➕ Agregar Función
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/edit-function" className="nav-link">
                ✏️ Editar Función
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/delete-function" className="nav-link">
                ❌ Eliminar Función
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMenu;
