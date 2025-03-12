import { Container } from "react-bootstrap";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mt-4">{children}</Container>
    </>
  );
};

export default MainLayout;
