import React from "react";
import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MainLayout;