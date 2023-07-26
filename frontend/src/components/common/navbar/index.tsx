import { ConnectBtn, NavbarWrapper } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainContainer } from "components/common";
import { Image } from "react-bootstrap";
import { logo } from "assets";

function Topbar() {
  return (
    <NavbarWrapper>
      <Navbar bg="light" expand="lg">
        <MainContainer>
          <Navbar.Brand href="#home">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">about</Nav.Link>
              <Nav.Link href="#link">How to Buy</Nav.Link>
              <Nav.Link href="#link">Tokenomics</Nav.Link>
              <Nav.Link href="#link">Whitepaper</Nav.Link>
              <Nav.Link href="#link">0.05661 ETH</Nav.Link>
            </Nav>
            <ConnectBtn>CONNECT WALLET </ConnectBtn>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default Topbar;
