// src/components/Footer.js
import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, Slide} from "@mui/material";
import SWEBody from "./SWEBody";
import ImageViewer from "react-simple-image-viewer";
import textStrings from '../text.json';
import web31 from '../ProjectAssets/Web3Welcome/Web3Welcome.png';


function ACTrackerPortfolioEntry() {
    const images = [
        web31
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
            <h1>Web3 Welcome Page</h1>
            <h3>Lead Front End Developer</h3>
            <p style={{
                fontSize: 26,
                textIndent: "30px",
                textAlign: "start",
                marginLeft: "150px",
                marginRight: "150px",
                lineHeight: "1.5"
            }}>{textStrings.Web3Text}</p>
            <div style={{marginTop: 25}}>
                {images.map((src, index) => (
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width="900"
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
