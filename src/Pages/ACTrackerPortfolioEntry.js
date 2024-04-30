// src/components/Footer.js
import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, Slide} from "@mui/material";
import SWEBody from "./SWEBody";
import ImageViewer from "react-simple-image-viewer";
import textStrings from '../text.json';
import ac1gif from '../ProjectAssets/ACApp/ACAppGif.gif';
import ac1 from '../ProjectAssets/ACApp/ACApp1.PNG';
import ac2 from '../ProjectAssets/ACApp/ACApp2.PNG';
import ac3 from '../ProjectAssets/ACApp/ACApp3.PNG';

function ACTrackerPortfolioEntry() {
    const images = [
        ac1gif,
        ac1,
        ac2,
        ac3
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
            <h1>Resendiz AC & Heating Employee/Task Management System</h1>
            <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{textStrings.ACText}</p>
        <div style={{marginTop:25}}>
            {images.map((src, index) => (
                <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="500"
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
