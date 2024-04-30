// src/components/Footer.js
import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, Slide} from "@mui/material";
import SWEBody from "./SWEBody";
import ImageViewer from "react-simple-image-viewer";
import textStrings from '../text.json';
import lp1gif from '../ProjectAssets/LanceParty/lp1.gif';
import lp2gif from '../ProjectAssets/LanceParty/lp2.gif';
import lp3gif from '../ProjectAssets/LanceParty/lp3.gif';
import lp4gif from '../ProjectAssets/LanceParty/lp4.gif';
import lp5gif from '../ProjectAssets/LanceParty/lp5.gif';
import lp6gif from '../ProjectAssets/LanceParty/lp6.gif';

function ACTrackerPortfolioEntry() {
    const images = [
        lp1gif,
        lp2gif,
        lp3gif,
        lp4gif,
        lp5gif,
        lp6gif,

    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            <h1>Lance Party</h1>
            <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{textStrings.LancePartyText}</p>
            <div style={{marginTop:25}}>
                {images.map((src, index) => (
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width="700"
                        key={index}
                        style={{margin: "2px"}}
                        alt=""
                    />
                ))}
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)"
                        }}
                        closeOnClickOutside={true}
                    />
                )}
            </div>
        </div>
    );
}

export default ACTrackerPortfolioEntry;
