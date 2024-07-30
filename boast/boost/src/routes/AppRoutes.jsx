import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage"


const AppRoutes = () =>{
    return(
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage/>} ></Route>
              </Routes>
            </BrowserRouter>
        </div>
    )
};

export default AppRoutes;