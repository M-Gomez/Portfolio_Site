// src/components/Footer.js
import React from 'react';
import {FaReact} from "react-icons/fa";

function Footer() {
    return (
        <footer style={{alignContent: "flex-end", paddingTop: '5px',paddingBottom: '20px', marginTop: "15px", textAlign: 'center', backgroundColor: '#f0f0f0'}}>
            <div style={{}}>
                <h3> Made using <FaReact style={{}}/></h3>
            </div>
            <p>© Manuel Gomez IV 2024</p>
        </footer>
    );
}

export default Footer;
