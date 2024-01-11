import React from "react";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";

import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from "./components/Footer";



export default function App() {
    return (
        <div>
            <MyNavbar />
            <Home />
            <MyFooter />
        </div>
    )
}