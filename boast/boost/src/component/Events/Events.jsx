import React from "react";
import img4 from "../../assets/updateLogo.jpg"
import { Col, DropdownButton, Form, InputGroup, Navbar, Row, Dropdown, Button, FormGroup,  } from "react-bootstrap";
import "./Events.css"
import Container from "react-bootstrap/Container"




const Events = () => {
    return(
       <>
        
          <div className="main-form  container-fluid ">
          
            <Navbar data-bs-theme="dark" >
            <Navbar.Brand >

            <div className="d-flex justify-content-between ">
                <img src={img4} alt="brand" className="img-fluid" width={80} height={80} />
                     <a href="#" className="position-absolute end-0">
                        Logout
                    </a>
            </div>
                 
            </Navbar.Brand>
            </Navbar>
            <Container fluid> 
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center text-capitalize">
                    <h1>5th international conference on  nutrition</h1>
                </div>
                <div className="col-md-7 schedule">
                   <p className="mb-3  text-capitalize"> This conference is a device that erradicate malnutrition and promote good health</p>
                   <p className="mb-3 "> Program Schedule</p>
                   <p className="mb-3"> Arrival between 7 am and 1 pm on Day 1</p>
                   <p className="mb-3"> Session Starts at 2 pm on Day 1</p>
                   <p className="mb-3"> Program Closes at 6 pm on Day 2</p>
                </div>

            </div>
            </Container>
            <Container fluid> 
            <div className="wrapper mb-2 ">
             
                <div className="row d-flex justify-content-center">
           
                 
           <div className="long shadow-thin border-radius col-12 col-md-7">
                <div>
                <h4>Personal Detail</h4>
                </div>
                <hr/>
                
                <div className="main">
           
                    <Form >
               <Form.Group as={Row} className="mb-3" controlId="formName" >
                  <Col  md="6" sm="12" >
                     <Form.Label aria-required >First Name</Form.Label>
                     <Form.Control>
               
                     </Form.Control>
                  </Col>
                 
               </Form.Group>
               <Form.Group as={Row} className="mb-3" controlId="formLastName" >
                  <Col md="6" >
                     <Form.Label required >Last Name</Form.Label>
                     <Form.Control>
               
                     </Form.Control>
                  </Col>
                 
               </Form.Group>
               <Form.Group as={Row} className="mb-3" controlId="formEmail" >
                  <Col  md="6" >
                     <Form.Label required >Email</Form.Label>
                     <Form.Control>
                          
                     </Form.Control>
                  </Col>
                 
               </Form.Group>
             <Form.Group as={Row}>
               <Col md="6">
               <Form.Label required >Country Code & Phone Number</Form.Label>
               <InputGroup >
              <DropdownButton
                     variant="outline-secondary"
                     title="IN(+91)"
                     id="input-group-dropdown"
                     >
                        <Dropdown.Item href="#">
                            India
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            China
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Japan
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            England
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Newzland
                        </Dropdown.Item>
                     </DropdownButton>
                     <Form.Control>
               
                     </Form.Control>
              </InputGroup>
          
          <div  className="mb-3 mt-2 d-flex justify-content-">
          <Form.Check aria-label="option" ></Form.Check>
           <Form.Text className="ms-1 text-md-start">
               My WhatsApp number is the same as my phone number
           </Form.Text>
                  
               
          </div>
            
              
               </Col>

             </Form.Group>
             <Form.Group as={Row}>
               <Col md="6">
               <Form.Label className="text-md-start">WhatsApp Country Code & Phone Number</Form.Label>
               <InputGroup >
              <DropdownButton
                     variant="outline-secondary"
                     title="IN(+91)"
                     id="input-group-dropdown"
                     >
                        <Dropdown.Item href="#">
                            India
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            China
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Japan
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            England
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Newzland
                        </Dropdown.Item>
                     </DropdownButton>
                     <Form.Control>
               
                     </Form.Control>
              </InputGroup>
          
              
               </Col>

             </Form.Group>
             <Form.Group as={Row} className="mb-3">
               <Col md="6">
                  <Form.Label htmlFor="exampleDate" className="my-2" required >Date Of Birth</Form.Label>
                  <Form.Control
                  type="date"
                  id="exampleDate"
                  ></Form.Control>
               </Col>
             </Form.Group >
                
             <Form.Group as={Row} className="mb-3" >
             <Col md="6" >
                    <Form.Label required >Gender</Form.Label>
                    <Form.Select aria-label="select example" >
                       <option>Male</option>
                       <option>Female</option>
                       <option>Others</option>
                    </Form.Select>
                 </Col>
             </Form.Group>

             
             <Form.Group as={Row}  className="mb-3">
             <Col md="6" >
                    <Form.Label required >Nationality</Form.Label>
                    <Form.Select aria-label="select example" >
                       <option>India</option>
                       <option>America</option>
                       <option>Austria</option>
                       <option>Australia</option>
                       <option>belgium</option>
                       <option>barbados</option>
                       <option>Canada</option>
                       <option>Colambia</option>
                       <option>Denmark</option>
                       <option>Equestrian</option>
                       <option>France</option>
                       <option>Greece</option>
                       <option>Hawai</option>
                       <option>Italy</option>
                       <option>Iraq</option>
                       <option>kenya</option>
                       <option>Mongolia</option>
                       <option>Nigeria</option>
                       <option>Oman</option>
                       <option>United Arab Emirates</option>
                    </Form.Select>
                 </Col>
             </Form.Group>
             
             </Form>

                </div>
                
            </div>
            
           </div>
          
   
   
  <div className="row d-flex justify-content-center">
  
         
           <div className="yung shadow-thin border-radius col-12 col-md-7">
                <h4>Address Details</h4>
                <hr/>
                <div className="sub-main">
                   <Form>
                       <Form.Group as={Row} className="mb-3">
                           <Col md="6">
                             <Form.Label required>Country</Form.Label>
                             <Form.Select>
                               <option>India</option>
                               <option>Afghanistan</option>
                               <option>Pakistan</option>
                               <option>Nepal</option>
                               <option>Malasiya</option>
                               <option>Singapore</option>
                               <option>Thailand</option>
                               <option>Bangladesh</option>
                               <option>Srilanka</option>
                               <option>United Kingdom</option>
                             </Form.Select>
                           </Col>
                       </Form.Group>

                       <Form.Group as={Row} className="mb-3">
                           <Col md="6" >
                             <Form.Label required>Pincode/Postalcode/Zipcode</Form.Label>
                             <Form.Control></Form.Control>
                           </Col>
                       </Form.Group>  

                        <div className="d-flex flex-column">
                        <Form.Group as={Row} className="mb-3">
                           <Col md="6">
                             <Form.Label required>State</Form.Label>
                             <Form.Select>
                               <option>Andaman and Nicobar</option>
                               <option>Andhra Pradesh</option>
                               <option>Bihar</option>
                               <option>Chhattisgarh</option>
                               <option>Delhi</option>
                               <option>Goa</option>
                               <option>Gujarat</option>
                               <option>Himachal Pradesh</option>
                               <option>Jharkhand</option>
                               <option>Jammu and Kashmir</option>
                               <option>Karnataka</option>
                               <option>Kerala</option>
                               <option>Maharashtra</option>
                               <option>Manipur</option>
                               <option>Nagaland</option>
                               <option>Orissa</option>
                               <option>Punjab</option>
                               <option>Puducherry</option>
                               <option>Rajasthan</option>
                               <option>Tamil Nadu</option>
                               <option>Telangana</option>
                               <option>Weast Bengal</option>
                             </Form.Select>
                               
                           </Col>
                       </Form.Group>

                       <Form.Group as={Row} className="mb-3">
                           <Col md="6" >
                             <Form.Label required>City</Form.Label>
                             <Form.Control></Form.Control>
                           </Col>
                       </Form.Group>  

                        </div>
                       <Form.Group as={Row} className="mb-3">
                           <Col >
                             <Form.Label required>Address</Form.Label>
                           
                             <Form.Control as="textarea" ></Form.Control>
                           
                           </Col>
                       </Form.Group>  
                       
                   </Form>
                   
                </div>
                
 
           </div>
          
   </div>
                
           
            
           </div> 
           </Container>
           
        </div>
        <Container className="order">
        <Form.Group as={Row} className="my-5 d-flex justify-content-center   pot">
                 <Col sm="12" md="7">
                 <Button className="py-3 btn btn-block w-100 ">Continue</Button>
                 </Col>
             </Form.Group>
        </Container>
             
          
 
          
        
       </>
       
    )
};
export default Events;

{/* <div className="row d-flex justify-content-center align-items-center my-5 clip ">
                <div className="col-12 col-md-7 ">
                <Button className="  btn btn-block py-3">Continue</Button>
                </div>
             </div> */}