import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/Home'
import {Home2} from './pages/Home2'

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home2" exact element={<Home2 />} />
            </Routes>
        </BrowserRouter>
    )
}