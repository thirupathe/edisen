import React, { useEffect, useState } from "react";
import privateApi from "../../api/privateApi";
import "./About.css"

import { Breadcrumb, Button, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const About = () =>{
    const [apiData, setApidata] = useState([]);
    useEffect(()=>{
        const getApi = async () =>{
            const {data}= await privateApi. get("/products");
            setApidata(data);
            console.log(data)
        };
        getApi();
    },[]);
   
    const [name,setname] = useState("");

    const handlesubmit = async (e) => {
        e.preventdefault();
        if(name==="SSLC1-100"){
            console.log("Pass");
        }else{
            console.log("Fail")
        }
    }

    return(
        <div className="about bg-secondary-subtle">
            <div className="wrapper">
               <header className="banner "  >
                  <Nav role="menubar" className="nav " variant="dark" >
                  <Nav.Item className="hamburger">
                        <Nav.Link role="menuitem " >
                        <i class="bi bi-list" ></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none">
                        <Nav.Link role="menuitem ">
                        <i class="bi bi-search"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-md-inline" >
                        <Nav.Link role="menuitem ">
                        <i class="bi bi-person-circle"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-md-inline" >
                        <Nav.Link role="menuitem ">
                            {/* <div className="badge-counter">1</div> */}
                        <i class="bi bi-bell-fill"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-md-inline" >
                        <Nav.Link role="menuitem ">
                            <i class="bi bi-cart-fill"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-md-inline" >
                        <Nav.Link role="menuitem">
                            <i class="bi bi-box-arrow-right"></i>
                        </Nav.Link>
                    </Nav.Item>
                  </Nav>
               </header>
            </div>
            <div className="mb-3">
                
            <Breadcrumb>
                        <Breadcrumb.Item href="#" className="link" >HOME</Breadcrumb.Item>
                        <Breadcrumb.Item active >CORE PRODUCTS</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="category">
                <div className="subcategory-title d-flex justify-content-around 
            mb-3 ">
                    <h3 className="text-secondary-emphasis title arrow " >Core product</h3>
                    <div className="row sort-controls " >
                         <div className="col-2 light">
                            <a href="#" className="filter pe-0" >Filters</a>
                         </div>
                         <div className="col-auto ms-0 ">
                            <Form.Select aria-label="select" className="sort-by" >
                               <option>Relevance</option>
                               <option>Descending by Name</option>
                               <option>Ascending by Name</option>
                               <option>Low to High(Price)</option>
                               <option>High to Low(Price)</option>
                            </Form.Select>
                         </div>
                         <div className="col-2 ps-0" >
                            <a href="#">
                            <i class="bi bi-grid-3x3-gap-fill"></i>
                            </a>
                         </div>
                         <div className="col ps-0 dark">
                            <a href="#">
                            <i class="bi bi-card-list"></i>
                            </a>
                         </div>

                    </div>
                </div>
            </div>


            { apiData?.map((item,i)=>(
                <div key={i}>
                  <div className="product-list mt-4  d-flex justify-content-center">
                  <div className="row product-list-items main ">
                    <div className="col-12 col-md-8 item " role="option">
                    <a href="#" className="product-info d-flex ">
                            
                     <img  src={item?.image}  alt="bag" className="about-img mx-3" />
                   <div className="row d-flex flex-column">
                   <div className="description ">
                    <p className="name">{item?.title}</p>
                    <NavLink to={`/product/${item?.id}`}>View Products 
                    </NavLink>
                    <div className="sku">SKU 4114</div>
                    </div>
                    <div className="pricing">
                    <div className="price">
                      <span>
                        "Maximum Retail Price":  
                        <div className="d-inline-block ms-1">{item?.price}</div>
                       </span>
                       
                      </div>
                      


                    </div>
                   </div>
                    
                    
                    
                    </a>
                   
                    </div>
                    <div className="col-12 col-md-4 product-right-content">
                       <div className="right-product-tags">
                        <div className="best-seller">
                        <i class="bi bi-star-fill"></i>
                        "Best Seller"
                        <i class="bi bi-star-fill"></i>
                        </div>
                        <div>
                            <a href="#">
                            <i class="bi bi-bag-heart"></i>
                            </a>
                        </div>
                       </div>
                       <div className="add-to-cart">
                          <div className="h1-form"> </div>
                             <ul>
                                <li className="quantity">
                                   <a href="#" className="minus">
                                      <i class="bi bi-dash-square text-bg-light"></i>
                                   </a>
                                   <input type="number"  className="increment " min="1" max="200" />
                                   <a href="#">
                                    <i class="bi bi-plus-square"></i>
                                   </a>
                                </li>
                             </ul>
                            <a href="#" className="btn btn-primary">
                                <span>Add to Cart</span>
                            </a>
                       </div>
                    </div>
                   </div>
                  </div>
                   
                </div>    
            ))

            }

        </div>
    );
};

export default About;

 {/* 
 <Form onsubmit={ handlesubmit} >
 <Form.Control onchange={(e)=>setname(e.largest.value)} ></Form.Control>
 <Button>Submit</Button>
</Form> 
*/}

{/* 
<div>
    {item?.rating}
 </div> 
*/}