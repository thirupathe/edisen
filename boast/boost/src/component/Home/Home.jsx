import React from "react";
import { Button, CarouselItem } from "react-bootstrap";
import img1 from "../../assets/multi.jpeg";
import img2 from "../../assets/PP-200g.jpeg"
import { Carousel } from "react-bootstrap";
import "./Home.css";


const Home = () => {
    return(
        <>
          <div className="container-fluid">
          <div  className="bg-primary">
            <div >
                <section className=" d-flex justify-content-end ">
                    <div className=" w-50 w-md-75 " >
                        <aside className="my-3" >
                            <a href="#"  className="btn btn-light text-primary border-1 border-secondary-subtle place
                            rounded-5">
                                LEARN HOW TO PLACE AN ORDER
                            </a>
                        </aside>
                    </div>
                </section>
            </div>
            <hr className="bg-primary border"/>
        </div>
        
       <div className="bg-secondary-subtle">
       <div className="w-100 mb-5 " style={{height:"50px"}}>
       <hr className="border-top "></hr>
        </div>
         
        <hr className="bg-secondary-subtle border-bottom-dark border-3 mb-3"/>
        </div>
        <h3 className="  banner text-dark-emphasis mx-sm-1" >TOP SELLING ITEMS</h3>
       
        <div className="mb-5" style={{maxWidth:350}}>
        <p className="mt-2"  style={{textIndent:50}}>Herbalife product that are flying off <span className="ms-5"> the shelves</span> </p>
        </div>
            <div className="container">
            <Carousel className="row row-cols-md-2 row-cols-lg-4">
            <Carousel.Item  className="col">
             <div className="d-flex flex-column">
                <div className="orbit my-5 mx-auto">
                <img src={img1} alt="multi" />
                </div>
                <div className="my-3 corpse">
                    <Carousel.Caption className="position-relative">
                            <h3 className="text-capitalize text-dark position-absolute start-0">multivitamin mineral and herbal tablets plus 90 tablet</h3>
                           
                    </Carousel.Caption>
                </div>    
                    <div className="my-5 desk">
                           <Button className="my-3 w-25" >Buy Now</Button>
                    </div>
        
               
            </div>
            </Carousel.Item >  
            <Carousel.Item className="col">
            <div className="d-flex flex-column">
                <div className="orbit1 my-5 mx-auto">
                    <img src={img2} alt="Protien" />
                </div>
                <div className="my-3 corpse1">
                <Carousel.Caption className="position-relative">
                            <h3 className="text-capitalize text-dark position-absolute start-0 ">personalized protein <br/><span className="position-absolute start-0">
                            powder 200 g</span></h3>
                          
                    </Carousel.Caption>
                </div>
                <div className="mb-5 desk-1 my-5">
                           <Button className="w-25 my-5">Buy Now</Button>
                 </div>
            </div>      
            </Carousel.Item> 
            <Carousel.Item className="col">
            <div className="d-flex flex-column">
                <div className="orbit1 my-5 mx-auto">
                    <img src={img2} alt="Protien" />
                </div>
                <div className="my-3 corpse1">
                <Carousel.Caption className="position-relative">
                            <h3 className="text-capitalize text-dark position-absolute start-0 ">personalized protein <br/><span className="position-absolute start-0">
                            powder 200 g</span></h3>
                          
                    </Carousel.Caption>
                </div>
                <div className="mb-5 desk-1 my-5">
                           <Button className="w-25 my-5">Buy Now</Button>
                 </div>
            </div>      
            </Carousel.Item>
            <Carousel.Item className="col">
            <div className="d-flex flex-column">
                <div className="orbit1 my-5 mx-auto">
                    <img src={img2} alt="Protien" />
                </div>
                <div className="my-3 corpse1">
                <Carousel.Caption className="position-relative">
                            <h3 className="text-capitalize text-dark position-absolute start-0 ">personalized protein <br/><span className="position-absolute start-0">
                            powder 200 g</span></h3>
                          
                    </Carousel.Caption>
                </div>
                <div className="mb-5 desk-1 my-5">
                           <Button className="w-25 my-5">Buy Now</Button>
                 </div>
            </div>      
            </Carousel.Item> 

        </Carousel>
        
            </div>

          </div>
        </>
    )
};

export default Home;