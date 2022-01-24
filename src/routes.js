import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

import {Planet} from './pages/Planet'
import {Galaxy} from './pages/Galaxy'

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Planet />} />
                <Route path="/galaxy" exact element={<Galaxy />} />
            </Routes>
        </BrowserRouter>
    )
}