import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "../../assets/myherbalife-logo.svg"
import "./Navbar.css"
//import { Breadcrumb, BreadcrumbItem, NavLink } from "react-bootstrap";


const Navcomp = () => {
    return(
   <>
  
   <Navbar expand="md" bg="light" data-bs-theme="light" > 
    <Container fluid>
    <Navbar.Brand  >
        <img src={img} alt="Brand" />
    </Navbar.Brand >
    <Navbar.Toggle aria-controls="nav-mock" ></Navbar.Toggle>
    <Navbar.Collapse id="nav-mock" >
    <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Product</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="#">Learn</Nav.Link>
        <Nav.Link href="/Events">Event</Nav.Link>
        <Nav.Link href="/Signin">Signin</Nav.Link>
        {/* <button className="btn  me-0">Sign In</button> */}
    </Nav>
        
    </Navbar.Collapse>
   
 </Container>
</Navbar>
   </>
    )
};

export default Navcomp;

     