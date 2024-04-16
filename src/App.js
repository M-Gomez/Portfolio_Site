import React, {useCallback, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './header'; // Make sure the path is correct
import PortfolioBody from "./Pages/PortfolioBody";
import Footer from "./footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CaseStudies from "./Pages/CaseStudies";


function App() {

    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <Header/>
            <div style={{minHeight: "800px"}}>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="Portfolio/Software" element={<PortfolioBody/>}/>
                    <Route path="Portfolio/CaseStudies" element={<CaseStudies/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                    <Route path="About" element={<About/>}/>
                </Routes>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default App;
