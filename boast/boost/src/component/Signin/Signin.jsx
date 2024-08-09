import React from "react";
import { Breadcrumb, Container, Form,  Navbar } from "react-bootstrap";
import img from "../../assets/myherbalife-logo.svg"
import img3 from "../../assets/recaptcha-logo.svg"
import "./Signin.css"
import { Button} from "react-bootstrap";
import footer from "react-bootstrap"


const Signin = () => {
    return(
      <>
      <Container fluid className="bg-secondary-subtle" >
     <header>
     <Navbar data-bs-theme="light" >
        <Navbar.Brand>
            <img src={img}  className="img-fluid"/>
        </Navbar.Brand>
       </Navbar>
     </header>
 
      
<section className="my-5">

    <div className="txt " >
        <Form className="text-bg-light"> 
                <h2 className="text-dark-emphasis">Sign in</h2>
                <Form.Group controlId="formBasicEmail" className="mb-3">
             <Form.Label>Username/Email</Form.Label>
             <Form.Control type="email" className="bg-secondary-subtle" ></Form.Control>
         </Form.Group>

          <Form.Group controlId="formBasicPassword" className="position-relative">
          <Form.Label>Password</Form.Label>
                <p className="text-primary position-absolute end-0 top-0" >Show Password</p>
            <Form.Control type="password" className="bg-secondary-subtle"></Form.Control>
              
           </Form.Group>
          
           <div>
              <Form.Group controlId="formBasicCheckbox" className="my-3 learn"> 
               <Form.Check type="checkbox" label="I'm not a robot"   ></Form.Check>
               <span>
                <img src={img3} alt="recaptcha"  className="img-fluid"/>
               </span>
            </Form.Group>
           </div>

           <span className="d-block">
              <Button className="w-100">Sign in</Button>
           </span>

           <div className="d-flex flex-column query">
             <a href="#">Forgot Password?</a>
             <a href="#">Forgot Username?</a>
             <a href="#">I Forgot Pin</a>
           </div>
           <hr/>
           <div className="bottom-box">
               <a href="#">Not registered?</a>
               <Button className="btn bg-secondary-subtle text-dark w-100 fw-semibold">Create an Account</Button>
           </div>
         </Form>

        
   </div>
       
</section>
  <footer>
     <section>
        <div className="pop position-relative">
            
        <Breadcrumb aria-label="breadcrumb"  className="d-flex justify-content-md-center ">
           <Breadcrumb.Item href="#">Help</Breadcrumb.Item>
           <Breadcrumb.Item href="#">About</Breadcrumb.Item >
           <Breadcrumb.Item href="#">Terms of Use</Breadcrumb.Item>
           <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
        </Breadcrumb>
        
    
        <Breadcrumb aria-label="breadcrumb"  className="position-absolute bottom-0 m-auto px-5">
           <Breadcrumb.Item active>en-IN</Breadcrumb.Item>
           <Breadcrumb.Item active>02-08-2024 03:38:23</Breadcrumb.Item >
           <Breadcrumb.Item active>zuswpwssg000006</Breadcrumb.Item>
           <Breadcrumb.Item active>MyHL</Breadcrumb.Item>
           <Breadcrumb.Item active>02-08-2024 13:38:28</Breadcrumb.Item>
           <Breadcrumb.Item active>1.24.0717.04</Breadcrumb.Item>
        </Breadcrumb>
        
        </div>
        </section> 
  </footer>
</Container>
      </>
    )
}
export default Signin;