// src/components/Header.js
import React from 'react';
import { routes } from "./routes.ts";
import {FaLinkedin, FaGithubSquare, FaEnvelopeSquare, FaInfo} from "react-icons/fa";
import {Tooltip} from "@mui/material";

function Header() {
    return (
        //<header style={{ padding: '20px 0', textAlign: 'center', backgroundColor: '#383944' }}>
         //   <h1 align={"left"}style={{marginLeft: "30px", color: '#d1deff'}}>Manuel Gomez IV</h1>
        //</header>
        <div style={{justifyContent: "space-between"}}>
            <ul className="hidden lg:flex lg:items-center gap-5 text-sm"
                style={{display: "flex", flex: "row", listStyle: "none", justifyContent: "space-between"}}>
                <div style={{display: "inline-flex"}}>
                {routes.map((route) => {
                    const {Icon, href, title} = route;
                    return (
                        <div style={{marginBottom: "10px", marginLeft: "30px", marginTop: "35px"}}>
                            <li>
                                <a
                                    href={href}
                                    className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                                >
                                    <button type="button" class="btn btn-primary">
                                    <Icon size={"26px"} style={{marginRight: "10px", marginBottom: "10px"}}/>
                                    <strong style={{fontSize: 30}}>{title}</strong>
                                    </button>
                                    </a>
                            </li>
                        </div>
                    );
                })}
                </div>
                <ul style={{paddingTop: "0px", marginTop: "0px", verticalAlign: "top"}}>
                    <a href="https://www.linkedin.com/in/manuel-gomez-iv/">
                        <FaLinkedin style={{fontSize: 63, display: "inline-block", marginRight: "15px"}}></FaLinkedin>
                    </a>
                    <a href="https://github.com/M-Gomez">
                        <FaGithubSquare
                            style={{fontSize: 63, display: "inline-block", marginRight: "15px"}}></FaGithubSquare>
                    </a>
                    <a href="mailto:mgomez@gmail.com">
                        <Tooltip title="mgomez4th@gmail.com" arrow
                                 TransitionProps={{ timeout: 300 }}
                        >
                            <div style={{fontSize: 63, display: "inline-block"}}>
                        <FaEnvelopeSquare
                                      style={{
                                          fontSize: 63,
                                          display: "inline-block",
                                          marginRight: "15px",
                                          marginTop: "24px",
                                          paddingTop: "0px"
                                      }}></FaEnvelopeSquare>
                            </div>
                        </Tooltip>
                </a>
                    <a href="https://github.com/M-Gomez">
                        <FaInfo style={{
                            fontSize: 55,
                            display: "inline-block",
                            marginRight: "15px",
                            paddingBottom: "3px"
                        }}></FaInfo>
                    </a>

                </ul>

            </ul>
            <ul className="hidden lg:flex lg:items-center gap-5 text-sm"
                style={{display: "flex", flex: "row", listStyle: "none"}}>
            </ul>
        </div>
);

}

export default Header;
