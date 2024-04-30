import React, {useCallback, useState} from 'react';
import ConversationalText from "react-conversational-text";
import {Button, ButtonGroup, FormControlLabel, Slide, Switch} from "@mui/material";
import ACTrackerPortfolioEntry from "./ACTrackerPortfolioEntry";
import LancePartyPortfolioEntry from "./LancePartyPortfolioEntry";
import FXAppPortfolioEntry from "./FXAppPortfolioEntry";
import Web3Page from "./Web3Page";


function PortfolioBody() {

    const [selectedProj, setProj] = React.useState(false);
    const handleChange = (projName) => {
        console.log(projName);
        setProj((prev) => projName);
    };

    return (
        <div align={"center"} style={{minHeight: "100px", display: "grid", marginTop: "25px"}}>
            <div style={{minHeight: "130px", marginBottom: "30px"}}>
            <ConversationalText
                style={{fontSize: 30, alignContent: "start",}} lineBreakBetweenMessages={true}
                messages={[
                    "Here's a showcase of my software projects,",
                    "although these are just personal projects,",
                    "and small contracting jobs done outside of my professional work."
                ]}
            />
            </div>
            <div>
                <div style={{marginTop: 10}}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button onClick={() => handleChange("HVAC App")}>HVAC Managerial App</Button>
                    <Button onClick={() => handleChange("Lance Party")}>Lance Party</Button>
                    <Button onClick={() => handleChange("Library App")}>Library JavaFX Crud App</Button>
                        <Button onClick={() => handleChange("Web3")}>Web3 Welcome Page</Button>

                    </ButtonGroup>
                    <div style={{marginTop: 20}}>
                    <Slide direction="left" in={selectedProj=="HVAC App"} mountOnEnter unmountOnExit>
                        <div align={"center"}>
                        <ACTrackerPortfolioEntry></ACTrackerPortfolioEntry>
                        </div>
                    </Slide>
                    <Slide direction="right" in={selectedProj == "Lance Party"} mountOnEnter unmountOnExit>
                        <div align={"center"}>
                            <LancePartyPortfolioEntry></LancePartyPortfolioEntry>
                        </div>
                    </Slide>
                    <Slide direction="left" in={selectedProj == "Library App"} mountOnEnter unmountOnExit>
                        <div align={"center"}>
                            <FXAppPortfolioEntry></FXAppPortfolioEntry>
                        </div>
                    </Slide>
                    <Slide direction="left" in={selectedProj == "Web3"} mountOnEnter unmountOnExit>
                        <div align={"center"}>
                            <Web3Page></Web3Page>
                        </div>
                    </Slide>
                </div>

                </div>
            </div>

        </div>
    );
}

export default PortfolioBody;
