import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage"
import SigninPage from "../pages/SigninPage";
import EventsPage from "../pages/EventsPage"
import AboutPage from "../pages/AboutPage";


const AppRoutes = () =>{
    return(
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/About" element={<AboutPage/>} />
                <Route path="/Signin" element={<SigninPage/>} />
                <Route path="/Events" element={ <EventsPage/> } />
              </Routes>
            </BrowserRouter>
        </div>
    )
};

export default AppRoutes;